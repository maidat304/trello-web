import Box from "@mui/material";

function BoardContent() {
  return (
    <Box
      sx={{
        backgroundColor: "primary.light",
        width: "100%",
        height: (theme) =>
          `calc(100vh - ${theme.trello.appBarHeight} - ${theme.trello.boardBarHeight})`,
        display: "flex",
        alignItems: "center",
      }}
    ></Box>
  );
}

export default BoardContent;
