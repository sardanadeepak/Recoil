import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { jobsAtom, messagingAtom, networkAtom, notificationAtom, totalNotificationSelector } from './store/atoms/atoms'

function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  )
}

export default App

const MainApp = () => {
  const networkNotificationCount = useRecoilValue(networkAtom)
  const jobsCount = useRecoilValue(jobsAtom)
  const notificationCount = useRecoilValue(notificationAtom)
  const messageCount = useRecoilValue(messagingAtom)
  const totalCount = useRecoilValue(totalNotificationSelector)
  return <>
    <button>Home</button>

    <button>My Network ({networkNotificationCount >= 100 ? "99+" : networkNotificationCount})</button>
    <button>Jobs ({jobsCount})</button>
    <button>Messaging ({messageCount})</button>
    <button>Notification ({notificationCount})</button>
    <button>Me{totalCount}</button>
  </>
}

