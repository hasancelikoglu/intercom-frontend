import { Autocomplete } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

export default function SearchBar() {
    return <div>
        <Autocomplete
        label=""
            variant="filled"
            size="md" radius="md"
            placeholder='Search user...'
            mt={20}
            icon={<IconSearch />}
            iconWidth={50}
            data={['React', 'Angular', 'Svelte', 'Vue']} />
    </div>
}