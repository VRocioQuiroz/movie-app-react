import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationMovies({onNewPage, pageNumber}) {
  return (
    <Stack spacing={2}>
      <Pagination variant="outlined" shape="rounded" count={10}  page={pageNumber} onChange={onNewPage} />
    </Stack>
  );
}