import { ButtonIcon } from "../ButtonIcon";
import { Container } from "../GroupCard/styles";
import { Icon, Name } from "./styles";

interface PlayerCardProps {
  name: string;
  onRemove: () => void;
}


export function PlayerCard({ name, onRemove }: PlayerCardProps) {
  return (
    <Container>
      <Icon name="person" />
      <Name>{name}</Name>
      <ButtonIcon icon="close" type="SECONDARY" onPress={onRemove} />
    </Container>
  )
}