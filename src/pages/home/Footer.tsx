import { Anchor, HStack, VStack, useColorModeValue } from "@hope-ui/solid"
import { Link } from "@solidjs/router"
import { AnchorWithBase } from "~/components"
import { useRouter, useT } from "~/hooks"
import { me } from "~/store"
import { UserMethods } from "~/types"

export const Footer = () => {
  const t = useT()
  const { isShare } = useRouter()
  const shareTextColor = useColorModeValue(
    "rgba(17, 24, 39, 0.58)",
    "rgba(255, 255, 255, 0.52)",
  )

  if (isShare()) {
    return (
      <VStack
        class="footer share-footer"
        position="fixed"
        left="$4"
        bottom="$4"
        w="auto"
        py="0"
        alignItems="flex-start"
        zIndex="$dropdown"
      >
        <HStack spacing="$1">
          <span style={{ color: shareTextColor() }}>From</span>
          <Anchor
            href="https://blog.greepar.uk"
            external
            p="0"
            minH="unset"
            color={shareTextColor()}
            _hover={{ color: shareTextColor(), textDecoration: "underline" }}
          >
            https://blog.greepar.uk
          </Anchor>
          <Anchor
            href="https://www.qwq.lu/"
            external
            p="0"
            minH="unset"
            color={shareTextColor()}
            _hover={{ color: shareTextColor(), textDecoration: "underline" }}
          >
            © QwQ.lu
          </Anchor>
        </HStack>
      </VStack>
    )
  }

  return (
    <VStack class="footer" w="$full" py="$4">
      <HStack spacing="$1">
        <Anchor href="https://github.com/OpenListTeam/OpenList" external>
          {t("home.footer.powered_by")}
        </Anchor>
        <span>|</span>
        <AnchorWithBase
          as={Link}
          href={UserMethods.is_guest(me()) ? "/@login" : "/@manage"}
        >
          {t(UserMethods.is_guest(me()) ? "login.login" : "home.footer.manage")}
        </AnchorWithBase>
      </HStack>
    </VStack>
  )
}
