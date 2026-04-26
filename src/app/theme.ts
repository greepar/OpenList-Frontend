import { globalCss, HopeThemeConfig } from "@hope-ui/solid"
import { hoverColor } from "~/utils"

const theme: HopeThemeConfig = {
  initialColorMode: "system",
  lightTheme: {
    colors: {
      // background: "$neutral2",
      background: "#f7f8fa",
    },
  },
  components: {
    Button: {
      baseStyle: {
        root: {
          rounded: "$lg",
          _active: {
            transform: "scale(.95)",
            transition: "0.2s",
          },
          _focus: {
            boxShadow: "unset",
          },
        },
      },
      defaultProps: {
        root: {
          colorScheme: "info",
          variant: "subtle",
        },
      },
    },
    IconButton: {
      defaultProps: {
        colorScheme: "info",
        variant: "subtle",
      },
    },
    Input: {
      baseStyle: {
        input: {
          rounded: "$lg",
          _focus: {
            boxShadow: "unset",
            borderColor: "$info8",
          },
        },
      },
      defaultProps: {
        input: {
          variant: "filled",
        },
      },
    },
    Textarea: {
      baseStyle: {
        rounded: "$lg",
        _focus: {
          boxShadow: "unset",
          borderColor: "$info8",
        },
        resize: "vertical",
        wordBreak: "break-all",
      },
      defaultProps: {
        variant: "filled",
      },
    },
    Select: {
      baseStyle: {
        trigger: {
          rounded: "$lg",
          _focus: {
            boxShadow: "unset",
            borderColor: "$info8",
          },
        },
        content: {
          border: "none",
          rounded: "$lg",
        },
        optionIndicator: {
          color: "$info10",
        },
      },
      defaultProps: {
        root: {
          variant: "filled",
        },
      },
    },
    Checkbox: {
      defaultProps: {
        root: {
          colorScheme: "info",
          variant: "filled",
        },
      },
    },
    Switch: {
      defaultProps: {
        root: {
          colorScheme: "info",
        },
      },
    },
    Menu: {
      baseStyle: {
        content: {
          rounded: "$md",
          minW: "unset",
          border: "unset",
          // py: "0",
        },
        item: {
          rounded: "$md",
          py: "$1",
          // mx: "0",
        },
      },
    },
    Notification: {
      baseStyle: {
        root: {
          rounded: "$lg",
          border: "unset",
        },
      },
    },
    Alert: {
      baseStyle: {
        root: {
          rounded: "$lg",
        },
      },
    },
    Anchor: {
      baseStyle: {
        rounded: "$lg",
        px: "$1_5",
        py: "$1",
        _hover: {
          bgColor: hoverColor(),
          textDecoration: "none",
        },
        _focus: {
          boxShadow: "unset",
        },
        _active: { transform: "scale(.95)", transition: "0.1s" },
      },
    },
    Modal: {
      baseStyle: {
        content: {
          rounded: "$lg",
        },
      },
    },
  },
}

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
  },
  html: {
    fontFamily: `-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol" !important`,
    minHeight: "100%",
  },
  body: {
    minHeight: "100%",
  },
  "#root": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "100%",
  },
  ".hope-breadcrumb__list": {
    flexWrap: "wrap",
    rowGap: "0 !important",
  },
  ".lightgallery-container": {
    "& .lg-backdrop": {
      zIndex: "$popover",
    },
    "& .lg-outer": {
      zIndex: "calc($popover + 10)",
    },
  },
  ".viselect-selection-area": {
    background: "rgba(46, 115, 252, 0.11)",
    border: "2px solid rgba(98, 155, 255, 0.81)",
    borderRadius: "0.1em",
  },
  ".viselect-container": {
    userSelect: "none",
    "& .viselect-item": {
      "-webkit-user-drag": "none",
      "& img": {
        "-webkit-user-drag": "none",
      },
    },
  },
  "body.share-page": {
    position: "relative",
    overflowX: "hidden",
    background: "#0f0f13",
  },
  "body.share-page::before": {
    content: '""',
    position: "fixed",
    inset: 0,
    zIndex: -2,
    pointerEvents: "none",
    backgroundImage: 'url("/static/shirobana-share.webp")',
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    transform: "scale(1.06)",
    filter: "blur(12px)",
    opacity: 0.92,
  },
  "body.share-page::after": {
    content: '""',
    position: "fixed",
    inset: 0,
    zIndex: -1,
    pointerEvents: "none",
  },
  "body.share-page, body.share-page #root, body.share-page #root > div, body.share-page #root > div > div, body.share-page #root > div > div > div":
    {
      background: "transparent !important",
    },
  ".share-nav, .share-obj-box": {
    overflow: "hidden",
  },
  "body.share-page nav": {
    borderRadius: "1rem",
  },
  "body.share-page .left-toolbar, body.share-page .center-toolbar > div > div":
    {
      background: "transparent !important",
      boxShadow: "none !important",
      border: "none !important",
    },
  "body.share-page .left-toolbar .hope-icon, body.share-page .toolbar-toggle, body.share-page .center-toolbar .hope-icon":
    {
      background: "rgba(17, 20, 28, 0.4) !important",
      boxShadow: "0 10px 24px rgba(0, 0, 0, 0.16) !important",
      border: "1px solid rgba(255, 255, 255, 0.08) !important",
      backdropFilter: "blur(18px) saturate(140%)",
      WebkitBackdropFilter: "blur(18px) saturate(140%)",
    },
  "body.share-page .left-toolbar .hope-icon:hover, body.share-page .toolbar-toggle:hover, body.share-page .center-toolbar .hope-icon:hover":
    {
      background: "rgba(255, 255, 255, 0.12) !important",
    },
  "body.share-page .hope-checkbox__control": {
    background: "rgba(17, 20, 28, 0.36) !important",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.14) !important",
    border: "1px solid rgba(255, 255, 255, 0.1) !important",
    backdropFilter: "blur(18px) saturate(140%)",
    WebkitBackdropFilter: "blur(18px) saturate(140%)",
  },
  "body.share-page .hope-checkbox__control:hover": {
    background: "rgba(255, 255, 255, 0.12) !important",
  },
  "body.share-page .hope-checkbox__root[data-checked] .hope-checkbox__control, body.share-page .hope-checkbox__control[data-checked]":
    {
      background: "rgba(255, 255, 255, 0.18) !important",
      border: "1px solid rgba(255, 255, 255, 0.18) !important",
    },
  "body.share-page .hope-menu__content, body.share-page [id^='hope-menu-'][id$='-content']":
    {
      background: "rgba(17, 20, 28, 0.4) !important",
      boxShadow: "0 16px 40px rgba(0, 0, 0, 0.26) !important",
      border: "1px solid rgba(255, 255, 255, 0.08) !important",
      backdropFilter: "blur(18px) saturate(140%)",
      WebkitBackdropFilter: "blur(18px) saturate(140%)",
    },
  "body.share-page .hope-select__content, body.share-page .hope-select__listbox, body.share-page [id^='hope-select-'][id$='-content'], body.share-page [id^='hope-select-'][id$='-listbox'], body.share-page [role='listbox']":
    {
      background: "rgba(17, 20, 28, 0.4) !important",
      boxShadow: "0 16px 40px rgba(0, 0, 0, 0.26) !important",
      border: "1px solid rgba(255, 255, 255, 0.08) !important",
      backdropFilter: "blur(18px) saturate(140%)",
      WebkitBackdropFilter: "blur(18px) saturate(140%)",
    },
  "body.share-page .hope-menu__item, body.share-page [role='menuitem']": {
    background: "transparent !important",
  },
  "body.share-page .hope-select__option, body.share-page [role='option']": {
    background: "transparent !important",
  },
  "body.share-page .hope-select__option:hover, body.share-page .hope-select__option[data-highlighted], body.share-page [role='option']:hover, body.share-page [role='option'][data-highlighted]":
    {
      background: "rgba(255, 255, 255, 0.12) !important",
    },
  "body.share-page .hope-menu__item:hover, body.share-page .hope-menu__item[data-highlighted], body.share-page [role='menuitem']:hover, body.share-page [role='menuitem'][data-highlighted]":
    {
      background: "rgba(255, 255, 255, 0.12) !important",
    },
  "body.share-page .hope-button, body.share-page .hope-icon-button, body.share-page .hope-select__trigger, body.share-page [id^='hope-select-'][id$='-trigger']":
    {
      background: "rgba(17, 20, 28, 0.4) !important",
      boxShadow: "0 16px 40px rgba(0, 0, 0, 0.18) !important",
      border: "1px solid rgba(255, 255, 255, 0.08) !important",
      backdropFilter: "blur(18px) saturate(140%)",
      WebkitBackdropFilter: "blur(18px) saturate(140%)",
    },
  "body.share-page .hope-button:hover, body.share-page .hope-icon-button:hover, body.share-page .hope-select__trigger:hover, body.share-page [id^='hope-select-'][id$='-trigger']:hover":
    {
      background: "rgba(255, 255, 255, 0.12) !important",
    },
  "body.share-page .hope-button[data-active], body.share-page .hope-icon-button[data-active], body.share-page .hope-select__trigger[data-active], body.share-page [id^='hope-select-'][id$='-trigger'][data-active]":
    {
      background: "rgba(255, 255, 255, 0.16) !important",
    },
  "body.share-page .share-footer": {
    background: "transparent !important",
  },
  "body.share-page .title": {
    borderBottom: "1px solid rgba(255, 255, 255, 0.18)",
  },
  "body.share-page .list-item": {
    borderRadius: "0.875rem",
  },
  "body.share-page .list-item:hover, body.share-page .list-item.selected": {
    background: "rgba(255, 255, 255, 0.14) !important",
  },
  "body.share-page .nav-link, body.share-page .title, body.share-page .title *":
    {
      color: "inherit !important",
    },
  "@media (prefers-color-scheme: light)": {
    "body.share-page .hope-menu__content, body.share-page [id^='hope-menu-'][id$='-content']":
      {
        background: "rgba(255, 255, 255, 0.3) !important",
        boxShadow: "0 14px 36px rgba(124, 128, 148, 0.18) !important",
        border: "1px solid rgba(255, 255, 255, 0.38) !important",
      },
    "body.share-page .left-toolbar .hope-icon, body.share-page .toolbar-toggle, body.share-page .center-toolbar .hope-icon":
      {
        background: "rgba(255, 255, 255, 0.3) !important",
        boxShadow: "0 10px 24px rgba(124, 128, 148, 0.14) !important",
        border: "1px solid rgba(255, 255, 255, 0.38) !important",
      },
    "body.share-page .left-toolbar .hope-icon:hover, body.share-page .toolbar-toggle:hover, body.share-page .center-toolbar .hope-icon:hover":
      {
        background: "rgba(255, 255, 255, 0.18) !important",
      },
    "body.share-page .hope-checkbox__control": {
      background: "rgba(255, 255, 255, 0.28) !important",
      boxShadow: "0 8px 20px rgba(124, 128, 148, 0.12) !important",
      border: "1px solid rgba(255, 255, 255, 0.38) !important",
    },
    "body.share-page .hope-checkbox__control:hover": {
      background: "rgba(255, 255, 255, 0.18) !important",
    },
    "body.share-page .hope-checkbox__root[data-checked] .hope-checkbox__control, body.share-page .hope-checkbox__control[data-checked]":
      {
        background: "rgba(255, 255, 255, 0.24) !important",
        border: "1px solid rgba(255, 255, 255, 0.42) !important",
      },
    "body.share-page .hope-select__content, body.share-page .hope-select__listbox, body.share-page [id^='hope-select-'][id$='-content'], body.share-page [id^='hope-select-'][id$='-listbox'], body.share-page [role='listbox']":
      {
        background: "rgba(255, 255, 255, 0.3) !important",
        boxShadow: "0 14px 36px rgba(124, 128, 148, 0.18) !important",
        border: "1px solid rgba(255, 255, 255, 0.38) !important",
      },
    "body.share-page .hope-menu__item:hover, body.share-page .hope-menu__item[data-highlighted], body.share-page [role='menuitem']:hover, body.share-page [role='menuitem'][data-highlighted]":
      {
        background: "rgba(255, 255, 255, 0.18) !important",
      },
    "body.share-page .hope-select__option:hover, body.share-page .hope-select__option[data-highlighted], body.share-page [role='option']:hover, body.share-page [role='option'][data-highlighted]":
      {
        background: "rgba(255, 255, 255, 0.18) !important",
      },
    "body.share-page .hope-button, body.share-page .hope-icon-button, body.share-page .hope-select__trigger, body.share-page [id^='hope-select-'][id$='-trigger']":
      {
        background: "rgba(255, 255, 255, 0.3) !important",
        boxShadow: "0 14px 36px rgba(124, 128, 148, 0.18) !important",
        border: "1px solid rgba(255, 255, 255, 0.38) !important",
      },
    "body.share-page .hope-button:hover, body.share-page .hope-icon-button:hover, body.share-page .hope-select__trigger:hover, body.share-page [id^='hope-select-'][id$='-trigger']:hover":
      {
        background: "rgba(255, 255, 255, 0.18) !important",
      },
    "body.share-page .hope-button[data-active], body.share-page .hope-icon-button[data-active], body.share-page .hope-select__trigger[data-active], body.share-page [id^='hope-select-'][id$='-trigger'][data-active]":
      {
        background: "rgba(255, 255, 255, 0.24) !important",
      },
    "body.share-page .title, body.share-page .title *": {
      color: "rgba(17, 24, 39, 0.88) !important",
    },
    "body.share-page::after": {
      backgroundImage:
        "radial-gradient(circle at top, rgba(255, 255, 255, 0.3), transparent 40%), linear-gradient(180deg, rgba(255, 255, 255, 0.28), rgba(255, 255, 255, 0.52))",
    },
  },
  "@media (prefers-color-scheme: dark)": {
    "body.share-page .hope-menu__content, body.share-page [id^='hope-menu-'][id$='-content']":
      {
        background: "rgba(17, 20, 28, 0.4) !important",
        boxShadow: "0 16px 40px rgba(0, 0, 0, 0.26) !important",
        border: "1px solid rgba(255, 255, 255, 0.08) !important",
      },
    "body.share-page .left-toolbar .hope-icon, body.share-page .toolbar-toggle, body.share-page .center-toolbar .hope-icon":
      {
        background: "rgba(17, 20, 28, 0.4) !important",
        boxShadow: "0 10px 24px rgba(0, 0, 0, 0.16) !important",
        border: "1px solid rgba(255, 255, 255, 0.08) !important",
      },
    "body.share-page .left-toolbar .hope-icon:hover, body.share-page .toolbar-toggle:hover, body.share-page .center-toolbar .hope-icon:hover":
      {
        background: "rgba(255, 255, 255, 0.12) !important",
      },
    "body.share-page .hope-checkbox__control": {
      background: "rgba(17, 20, 28, 0.36) !important",
      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.14) !important",
      border: "1px solid rgba(255, 255, 255, 0.1) !important",
    },
    "body.share-page .hope-checkbox__control:hover": {
      background: "rgba(255, 255, 255, 0.12) !important",
    },
    "body.share-page .hope-checkbox__root[data-checked] .hope-checkbox__control, body.share-page .hope-checkbox__control[data-checked]":
      {
        background: "rgba(255, 255, 255, 0.18) !important",
        border: "1px solid rgba(255, 255, 255, 0.18) !important",
      },
    "body.share-page .hope-select__content, body.share-page .hope-select__listbox, body.share-page [id^='hope-select-'][id$='-content'], body.share-page [id^='hope-select-'][id$='-listbox'], body.share-page [role='listbox']":
      {
        background: "rgba(17, 20, 28, 0.4) !important",
        boxShadow: "0 16px 40px rgba(0, 0, 0, 0.26) !important",
        border: "1px solid rgba(255, 255, 255, 0.08) !important",
      },
    "body.share-page .hope-menu__item:hover, body.share-page .hope-menu__item[data-highlighted], body.share-page [role='menuitem']:hover, body.share-page [role='menuitem'][data-highlighted]":
      {
        background: "rgba(255, 255, 255, 0.12) !important",
      },
    "body.share-page .hope-select__option:hover, body.share-page .hope-select__option[data-highlighted], body.share-page [role='option']:hover, body.share-page [role='option'][data-highlighted]":
      {
        background: "rgba(255, 255, 255, 0.12) !important",
      },
    "body.share-page .hope-button:hover, body.share-page .hope-icon-button:hover, body.share-page .hope-select__trigger:hover, body.share-page [id^='hope-select-'][id$='-trigger']:hover":
      {
        background: "rgba(255, 255, 255, 0.12) !important",
      },
    "body.share-page .hope-button[data-active], body.share-page .hope-icon-button[data-active], body.share-page .hope-select__trigger[data-active], body.share-page [id^='hope-select-'][id$='-trigger'][data-active]":
      {
        background: "rgba(255, 255, 255, 0.16) !important",
      },
    "body.share-page .title, body.share-page .title *": {
      color: "rgba(255, 255, 255, 0.62) !important",
    },
    "body.share-page .fileinfo h2, body.share-page .fileinfo h3, body.share-page .fileinfo .hope-heading":
      {
        color: "rgba(255, 255, 255, 0.96) !important",
      },
    "body.share-page .fileinfo .hope-text": {
      color: "rgba(255, 255, 255, 0.82) !important",
    },
    "body.share-page .modified, body.share-page .size": {
      color: "rgba(255, 255, 255, 0.88) !important",
    },
    "body.share-page::after": {
      backgroundImage:
        "radial-gradient(circle at top, rgba(255, 255, 255, 0.08), transparent 40%), linear-gradient(180deg, rgba(8, 10, 14, 0.38), rgba(8, 10, 14, 0.68))",
    },
  },
})

export { theme }
