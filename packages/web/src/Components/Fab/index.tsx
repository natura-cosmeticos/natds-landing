import * as React from "react";
import { withTheme } from "@material-ui/core/styles";
import MaterialFab from "@material-ui/core/Fab";
import { getDefaultTheme } from "../shared";
import { IFabProps } from "./IFabProps";

export { IFabProps } from "./IFabProps";

export const colors: any = {
  primary: "primary",
  secondary: "secondary",
  light: "light",
};

export const sizes: any = {
  small: "small",
  medium: "medium",
  large: "large",
};

export const variants: any = {
  round: "round",
  extended: "extended",
};

export const Fab: React.FunctionComponent<IFabProps> = React.forwardRef((
  props: IFabProps,
  ref: any,
) => {
  const {
      color = colors.primary,
      theme: providerTheme,
      disabled,
      style,
    } = props,

    theme = React.useMemo(() => getDefaultTheme(providerTheme), [providerTheme]),

    colorMap = React.useMemo(() => {
      const { palette } = providerTheme as any;

      return {
        light: {
          backgroundColor: palette.background.default,
          color: palette.background.defaultContrastText,
        },
        primary: {
          backgroundColor: palette.primary.main,
          color: palette.primary.contrastText,
        },
        secondary: {
          backgroundColor: palette.secondary.main,
          color: palette.secondary.contrastText,
        },
      };
    }, [theme]);

  let colorStyle = {};

  if (!disabled) {
    colorStyle = colorMap[color];
  }

  /**
   * @todo fix(web): TS2769 No overload matches this call on Fab component
   */
  return (
    // @ts-ignore
    <MaterialFab
      {...props}
      color="inherit"
      ref={ref}
      style={{
        ...colorStyle,
        ...style,
      }}
    />
  );
});

export default withTheme(Fab);
