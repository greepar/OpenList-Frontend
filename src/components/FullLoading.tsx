import { Center, ElementType, Spinner, SpinnerProps } from "@hope-ui/solid"
import { JSXElement, mergeProps, Show } from "solid-js"
import { getMainColor } from "~/store"

const spinnerSx = {
  opacity: 0.7,
}

export const FullScreenLoading = () => {
  return (
    <Center h="100vh">
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="rgba(128, 128, 128, 0.22)"
        color={getMainColor()}
        size="xl"
        style={spinnerSx}
      />
    </Center>
  )
}

export const FullLoading = (props: {
  py?: string
  size?: string
  thickness?: number
  ref?: any
}) => {
  const merged = mergeProps(
    {
      py: "$8",
      size: "xl",
      thickness: 4,
    },
    props,
  )
  return (
    <Center ref={props.ref} h="$full" w="$full" py={merged.py}>
      <Spinner
        thickness={`${merged.thickness}px`}
        speed="0.65s"
        emptyColor="rgba(128, 128, 128, 0.22)"
        color={getMainColor()}
        size={merged.size as any}
        style={spinnerSx}
      />
    </Center>
  )
}

export const MaybeLoading = (props: {
  children?: JSXElement
  loading?: boolean
}) => {
  return (
    <Show when={!props.loading} fallback={<FullLoading />}>
      {props.children}
    </Show>
  )
}

export const CenterLoading = <C extends ElementType = "div">(
  props: SpinnerProps<C>,
) => {
  return (
    <Center w="$full" h="$full">
      <Spinner color={getMainColor()} style={spinnerSx} {...props} />
    </Center>
  )
}
