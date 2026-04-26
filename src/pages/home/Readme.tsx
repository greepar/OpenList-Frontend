import { Box, useColorModeValue } from "@hope-ui/solid"
import { createMemo, Show, createResource, on } from "solid-js"
import { Markdown, MaybeLoading } from "~/components"
import { useLink, useRouter } from "~/hooks"
import { getSettingBool, objStore, State } from "~/store"
import { fetchText } from "~/utils"

export function Readme(props: {
  files: string[]
  fromMeta: keyof typeof objStore
}) {
  const cardBg = useColorModeValue("white", "$neutral3")
  const shareCardBg = useColorModeValue(
    "rgba(255, 255, 255, 0.34)",
    "rgba(17, 20, 28, 0.42)",
  )
  const shareBorder = useColorModeValue(
    "1px solid rgba(255, 255, 255, 0.42)",
    "1px solid rgba(255, 255, 255, 0.08)",
  )
  const shareShadow = useColorModeValue(
    "0 12px 30px rgba(124, 128, 148, 0.18)",
    "0 14px 36px rgba(0, 0, 0, 0.26)",
  )
  const { proxyLink } = useLink()
  const { isShare } = useRouter()
  const readme = createMemo(
    on(
      () => objStore.state,
      () => {
        if (
          ![State.FetchingMore, State.Folder, State.File].includes(
            objStore.state,
          )
        ) {
          return ""
        }
        if ([State.FetchingMore, State.Folder].includes(objStore.state)) {
          const obj = objStore.objs.find((item) =>
            props.files.find(
              (file) => file.toLowerCase() === item.name.toLowerCase(),
            ),
          )
          if (obj) {
            return proxyLink(obj, true)
          }
        }
        if (
          objStore[props.fromMeta] &&
          typeof objStore[props.fromMeta] === "string"
        ) {
          return objStore[props.fromMeta] as string
        }
        return ""
      },
    ),
  )
  const fetchContent = async (readme: string) => {
    let res = {
      content: readme as string | ArrayBuffer,
    }
    if (/^https?:\/\//g.test(readme)) {
      res = await fetchText(readme)
    }
    return res
  }
  const [content] = createResource(readme, fetchContent)
  return (
    <Show when={getSettingBool("readme_autorender") && readme()}>
      <Box
        classList={{ "share-glass": isShare() }}
        w="$full"
        rounded="$xl"
        p="$4"
        bgColor={isShare() ? shareCardBg() : cardBg()}
        border={isShare() ? shareBorder() : undefined}
        shadow={isShare() ? undefined : "$lg"}
        style={{
          "box-shadow": isShare() ? shareShadow() : undefined,
          "-webkit-backdrop-filter": isShare()
            ? "blur(18px) saturate(140%)"
            : undefined,
          "backdrop-filter": isShare()
            ? "blur(18px) saturate(140%)"
            : undefined,
        }}
      >
        <MaybeLoading loading={content.loading}>
          <Markdown
            children={content()?.content}
            readme
            toc={props.fromMeta === "readme"}
          />
        </MaybeLoading>
      </Box>
    </Show>
  )
}
