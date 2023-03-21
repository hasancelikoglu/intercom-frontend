import { Box, Progress, PasswordInput, Group, Text, Center } from '@mantine/core';
import { useInputState } from '@mantine/hooks';
import { IconCheck, IconX } from '@tabler/icons-react';
import { useAtom } from 'jotai';
import { useEffect } from 'react';
import { strengthAtom } from '../../atoms/authAtoms';

function PasswordRequirement({ meets, label }: { meets: boolean; label: string }) {
    return (
        <Text color={meets ? 'teal' : 'red'} mt={5} size="sm">
            <Center inline>
                {meets ? <IconCheck size="0.9rem" stroke={1.5} /> : <IconX size="0.9rem" stroke={1.5} />}
                <Box ml={7}>{label}</Box>
            </Center>
        </Text>
    );
}

const requirements = [
    { re: /[0-9]/, label: 'Includes number' }
];



export function PasswordStrength({data, setData}: any) {
    const [strength, setStrength] = useAtom(strengthAtom)

    const getStrength = (password: string) => {
        let multiplier = password.length > 5 ? 0 : 1;
        requirements.forEach((requirement) => {
            if (!requirement.re.test(password)) {
                multiplier += 1;
            }
        });


        setStrength(Math.max(100 - (100 / (requirements.length + 1)) * multiplier, 0))
    }

    useEffect(() => {
        getStrength(data.password)
    }, [data.password])



    const checks = requirements.map((requirement, index) => (
        <PasswordRequirement key={index} label={requirement.label} meets={requirement.re.test(data.password)} />
    ));
    const bars = Array(2)
        .fill(0)
        .map((_, index) => (
            <Progress
                styles={{ bar: { transitionDuration: '0ms' } }}
                value={
                    data.password.length > 0 && index === 0 ? 100 : strength >= ((index + 1) / 4) * 100 ? 100 : 0
                }
                color={strength > 80 ? 'teal' : strength > 50 ? 'yellow' : 'red'}
                key={index}
                size={4}
            />
        ));

    return (
        <div>
            <PasswordInput
                value={data.password}
                onChange={e => setData((data:any) => ({...data, password: e.target.value}))}
                mt="md"
                size="md"
                placeholder="Set a password"
                label="Password"
                required
            />

            <Group spacing={5} grow mt="xs" mb="md">
                {bars}
            </Group>

            <PasswordRequirement label="Has at least 6 characters" meets={data.password.length > 5} />
            {checks}
        </div>
    );
}