import React, { useMemo, Suspense } from "react";
import ReactDOM from "react-dom";

const DynamicComponent = ({name, ...props}) => {
  const Component = useMemo(() => {
    return React.lazy(() => loadRemoteComponent({
      // url: 'http://localhost:3002/remoteEntry.js',
      scope: 'app2',
      module: './App'
    }))
  }, [name])

  return (
    <Suspense
      fallback={
        <div style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
          <span style={{fontSize: 50}}>Loading...</span>
        </div>
      }>
      <Component {...props}></Component>
    </Suspense>
  )
}

export default React.memo(DynamicComponent)


async function loadRemoteComponent(config) {
  // return loadScript(config).then(() => loadComponentByWebpack(config))
  return loadComponentByWebpack(config);
}

function loadScript(config) {
  return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = config.url
      script.type = 'text/javascript'
      script.async = true
      script.onload = () => {
          console.log(`Dynamic Script Loaded: ${config.url}`)
          document.head.removeChild(script);
          resolve();
      }
      script.onerror = () => {
          console.error(`Dynamic Script Error: ${config.url}`)
          document.head.removeChild(script)
          reject()
      }
      document.head.appendChild(script)
  })
}

async function loadComponentByWebpack({ scope, module }) {
  // 初始化共享作用域，这将使用此构建和所有远程提供的已知模块填充它
  const c = await __webpack_init_sharing__('default')
  const container = window[scope] // 获取容器
  // 初始化容器，它可以提供共享模块
  await container.init(__webpack_share_scopes__.default);
  const factory = await window[scope].get(module);
  return factory();
}