import { Card, XStack, YStack, Text, H2, Paragraph, ScrollView } from 'tamagui';

const todos = [
  {
    id: 1,
    title: 'Complete Project Proposal',
    description: 'Draft and finalize the Q4 project proposal document',
    dueDate: '2024-03-20',
    priority: 'High',
  },
  {
    id: 2,
    title: 'Review Code Changes',
    description: 'Review pending pull requests for the main feature branch',
    dueDate: '2024-03-18',
    priority: 'Medium',
  },
  {
    id: 3,
    title: 'Team Meeting',
    description: 'Weekly sync with development team',
    dueDate: '2024-03-19',
    priority: 'Low',
  },
  {
    id: 4,
    title: 'Update Documentation',
    description: 'Update API documentation with recent changes',
    dueDate: '2024-03-21',
    priority: 'Medium',
  },
];

export default function TodoScreen() {
  return (
    <YStack padding="$4" gap="$4">
      <H2>My Tasks</H2>
      <ScrollView>
        <XStack flexWrap="wrap" gap="$4">
          {todos.map((todo) => (
            <Card
              key={todo.id}
              elevate
              bordered
              animation="bouncy"
              scale={0.9}
              hoverStyle={{ scale: 0.925 }}
              pressStyle={{ scale: 0.875 }}
              width="100%"
              minWidth="$10"
              $gtSm={{
                width: '48%',
                flex: 0,
              }}
              $gtMd={{
                width: '23%',
                flex: 0,
              }}
            >
              <Card.Header padded>
                <H2 color="$color" size="$6">
                  {todo.title}
                </H2>
                <Text
                  color={
                    todo.priority === 'High'
                      ? '$red'
                      : todo.priority === 'Medium'
                      ? '$orange'
                      : '$green'
                  }
                  fontSize="$2"
                >
                  {todo.priority} Priority
                </Text>
              </Card.Header>

              <Card.Footer padded>
                <YStack gap="$2">
                  <Paragraph color="$color" size="$3">
                    {todo.description}
                  </Paragraph>
                  <Text color="$gray10" fontSize="$2">
                    Due: {todo.dueDate}
                  </Text>
                </YStack>
              </Card.Footer>
            </Card>
          ))}
        </XStack>
      </ScrollView>
    </YStack>
  );
}
