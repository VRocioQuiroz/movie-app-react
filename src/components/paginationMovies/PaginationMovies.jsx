import { Pagination, Stack, Box } from "@mui/material";

export default function PaginationMovies({ onNewPage, pageNumber }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        py: 4,
        backgroundColor: "#28DF99",
      }}
    >
      <Stack spacing={2}>
        <Pagination
          variant="outlined"
          shape="rounded"
          count={10}
          page={pageNumber}
          onChange={onNewPage}
        />
      </Stack>
    </Box>
  );
}
