import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbProps,
  BreadcrumbSeparator,
  useColorModeValue,
} from "@hope-ui/solid"
import { Link } from "@solidjs/router"
import { createMemo, For, Show } from "solid-js"
import { usePath, useRouter, useT } from "~/hooks"
import { getSetting, local } from "~/store"
import { encodePath, hoverColor, joinBase } from "~/utils"

export const Nav = () => {
  const { pathname, isShare } = useRouter()
  const shareCardBg = useColorModeValue(
    "rgba(255, 255, 255, 0.3)",
    "rgba(17, 20, 28, 0.4)",
  )
  const shareBorder = useColorModeValue(
    "1px solid rgba(255, 255, 255, 0.38)",
    "1px solid rgba(255, 255, 255, 0.08)",
  )
  const shareShadow = useColorModeValue(
    "0 14px 36px rgba(124, 128, 148, 0.18)",
    "0 16px 40px rgba(0, 0, 0, 0.26)",
  )
  const paths = createMemo(() => {
    if (!isShare()) {
      return ["", ...pathname().split("/").filter(Boolean)]
    } else {
      const p = pathname().split("/").filter(Boolean)
      return [`@s/${p[1] ?? ""}`, ...p.slice(2)]
    }
  })
  const t = useT()
  const { setPathAs } = usePath()

  const stickyProps = createMemo<BreadcrumbProps>(() => {
    const mask: BreadcrumbProps = isShare()
      ? {}
      : {
          _after: {
            content: "",
            backgroundColor: "$background",
            position: "absolute",
            height: "100%",
            width: "99vw",
            zIndex: -1,
            transform: "translateX(-50%)",
            left: "50%",
            top: 0,
          },
        }

    switch (local["position_of_header_navbar"]) {
      case "only_navbar_sticky":
        return { ...mask, position: "sticky", zIndex: "$sticky", top: 0 }
      case "sticky":
        return { ...mask, position: "sticky", zIndex: "$sticky", top: 60 }
      default:
        return {
          _after: undefined,
          position: undefined,
          zIndex: undefined,
          top: undefined,
        }
    }
  })

  return (
    <Breadcrumb
      {...stickyProps}
      classList={{
        nav: true,
        "share-glass": isShare(),
        "share-nav": isShare(),
      }}
      w="$full"
      rounded={isShare() ? "$xl" : undefined}
      px={isShare() ? "$3" : undefined}
      py={isShare() ? "$2" : undefined}
      bgColor={isShare() ? shareCardBg() : "$background"}
      border={isShare() ? shareBorder() : undefined}
      style={{
        "box-shadow": isShare() ? shareShadow() : undefined,
        "-webkit-backdrop-filter": isShare()
          ? "blur(18px) saturate(140%)"
          : undefined,
        "backdrop-filter": isShare() ? "blur(18px) saturate(140%)" : undefined,
      }}
    >
      <For each={paths()}>
        {(name, i) => {
          const isLast = createMemo(() => i() === paths().length - 1)
          const path = paths()
            .slice(0, i() + 1)
            .join("/")
          const href = encodePath(path)
          let text = () => name
          if (!isShare() && text() === "") {
            text = () => getSetting("home_icon") + t("manage.sidemenu.home")
          } else if (isShare() && i() === 0) {
            text = () => getSetting("share_icon") + t("manage.sidemenu.shares")
          }
          return (
            <BreadcrumbItem class="nav-item">
              <BreadcrumbLink
                class="nav-link"
                css={{
                  wordBreak: "break-all",
                }}
                color="unset"
                _hover={{ backgroundColor: hoverColor(), color: "unset" }}
                _active={{ transform: "scale(.95)", transition: "0.1s" }}
                cursor="pointer"
                p="$1"
                rounded="$lg"
                currentPage={isLast()}
                as={isLast() ? undefined : Link}
                href={joinBase(href)}
                onMouseEnter={() => setPathAs(path)}
              >
                {text()}
              </BreadcrumbLink>
              <Show when={!isLast()}>
                <BreadcrumbSeparator class="nav-separator" />
              </Show>
            </BreadcrumbItem>
          )
        }}
      </For>
    </Breadcrumb>
  )
}
