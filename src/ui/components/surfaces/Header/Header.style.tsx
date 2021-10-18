import { styled } from "@mui/material/styles";
import { AppBar } from "@mui/material";
import { theme } from "ui/themes/theme";

export const HeaderAppBar = styled(AppBar)`
  background: ${({ theme }) => theme.palette.background.paper};
  box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.05);

  ${({ theme }) => theme.breakpoints.up("md")} {
    .MuiToolbar {
      height: 100px;
    }
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    .MuiToolbar {
      display: "flex";
      justify-content: center;
    }
  }
`;

export const HeaderLogo = styled("img")`
  height: 25px;

  ${({ theme }) => theme.breakpoints.up("md")} {
    .MuiToolbar {
      height: 47px;
    }
  }
`;
