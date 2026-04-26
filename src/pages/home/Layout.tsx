import { Markdown } from "~/components"
import { useRouter, useTitle } from "~/hooks"
import { getSetting } from "~/store"
import { notify } from "~/utils"
import { Body } from "./Body"
import { Footer } from "./Footer"
import { Header } from "./header/Header"
import { Toolbar } from "./toolbar/Toolbar"
import { onMount } from "solid-js"

let announcementShown = false
const defaultProjectAnnouncement =
  "Welcome to the OpenList project! For the latest updates, to contribute code, or to submit suggestions and issues, please visit our project repository."

const normalizeAnnouncement = (text: string) => text.replace(/\s+/g, " ").trim()

const Index = () => {
  useTitle(getSetting("site_title"))
  const announcement = getSetting("announcement")
  const { isShare } = useRouter()

  onMount(() => {
    if (
      announcement &&
      !announcementShown &&
      !isShare() &&
      normalizeAnnouncement(announcement) !==
        normalizeAnnouncement(defaultProjectAnnouncement)
    ) {
      notify.render(() => <Markdown children={announcement} />)
      announcementShown = true
    }
  })
  return (
    <>
      <Header />
      <Toolbar />
      <Body />
      <Footer />
    </>
  )
}

export default Index
