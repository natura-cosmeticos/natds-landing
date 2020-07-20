import React, { FunctionComponent, forwardRef } from "react";
import MaterialTable from "@material-ui/core/Table";

import { withTheme, makeStyles } from "@material-ui/core/styles";
import { tokens } from "@naturacosmeticos/natds-styles";
import { getDefaultTheme } from "../shared";
import { ITableProps } from "./ITableProps";

export { ITableProps } from "./ITableProps";

export const Table: FunctionComponent<ITableProps> = forwardRef((
  props: ITableProps,
  ref: any,
) => {
  const {
    theme: providerTheme,
    dividers = true,
    rounded = false,
    striped = true,
    ...rest
  } = props;

  const theme: any = React.useMemo(() => getDefaultTheme(providerTheme), [providerTheme]);

  /**
   * @todo refactor(web): move Table styles to `natds-styles`, consider `dividers` prop
   */
  // eslint-disable-next-line complexity
  const useStyles = React.useMemo(() => makeStyles({
    root: {
      color: theme.palette.text.primary,
      borderCollapse: "separate",
      border: dividers === false ? `1px solid ${theme.palette.text.hint}` : "none",
      borderRadius: dividers === false && rounded === true ? `${tokens.sizes.micro}` : `${theme.sizes.none}`,
      backgroundColor: theme.palette.background.paper,
      "& thead > tr > th ": {
        fontWeight: "bold",
        backgroundColor: theme.palette.background.paper,
        borderTop: dividers === false ? `${tokens.sizes.none}` : `1px solid ${theme.palette.text.hint}`,

        borderRight: dividers === false ? `${tokens.sizes.none}` : `1px solid ${theme.palette.text.hint}`,
        borderBottom: dividers === false ? `${tokens.sizes.none}` : `1px solid ${theme.palette.text.hint}`,
        padding: `${tokens.spacing.spacingStandard}px`,
        fontSize: "14px",
      },
      "& th:first-child": {
        borderLeft: dividers === false ? `${tokens.sizes.none}` : `1px solid ${theme.palette.text.hint}`,
      },
      "& td": {
        borderRight: dividers === false ? `${tokens.sizes.none}` : `1px solid ${theme.palette.text.hint}`,
        borderBottom: dividers === false ? `${tokens.sizes.none}` : `1px solid ${theme.palette.text.hint}`,
        padding: `${tokens.spacing.spacingStandard}px`,
        fontSize: "14px",
      },
      "& td:first-child": {
        borderLeft: dividers === false ? `${tokens.sizes.none}` : `1px solid ${theme.palette.text.hint}`,
      },
      "& tr": {
        backgroundColor: theme.palette.background.default,
        "&:nth-of-type(even)": {
          backgroundColor: striped === false ? theme.palette.background.default : `${theme.palette.complementary.highlight}0A`,
        },
      },
      "& thead > tr:first-child": {
        "& > th:first-child": {
          borderTopLeftRadius: rounded && `${tokens.sizes.micro}px`,
        },
        "& > th:last-child": {
          borderTopRightRadius: rounded && `${tokens.sizes.micro}px`,
        },
      },

      "& tbody > tr:last-child": {
        "& > td:first-child": {
          borderBottomLeftRadius: rounded && `${tokens.sizes.micro}px`,
        },
        "& > td:last-child": {
          borderBottomRightRadius: rounded && `${tokens.sizes.micro}px`,
        },
      },
    },
  }), [theme]);

  const customClasses = useStyles();

  return <MaterialTable className={customClasses.root} {...rest} ref={ref}/>;
});

export default withTheme(Table);
