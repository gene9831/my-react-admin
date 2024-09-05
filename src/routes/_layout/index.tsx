import { Text, Title } from '@mantine/core'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/')({
  component: Index,
})

function Index() {
  return (
    <>
      <Title order={1}>Heading 1</Title>
      <Title order={2}>Heading 2</Title>
      <Title order={3}>Heading 3</Title>
      <Title order={4}>Heading 4</Title>
      <Title order={5}>Heading 5</Title>
      <Title order={6}>Heading 6</Title>
      <Text fz="md" lh="md">
        Paras is an orange, insectoid Pokémon that resembles the nymph stage of
        a cicada. Its ovoid body is segmented, and it has three pairs of legs.
        The foremost pair of legs is the largest and has sharp claws at the
        tips. There are five specks on its forehead and three teeth on either
        side of its mouth. It has circular eyes with large pseudopupils.
      </Text>
    </>
  )
}
