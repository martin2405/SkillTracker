import { availableTags } from "@/constants/availableTags";
import { StyleSheet, View } from "react-native";
import TagBtn from "../buttons/TagBtn";
import ComponentLabel from "../texts/ComponentLabel";

interface TagsListProps {
  handleTag: (isActive: boolean, tag: string) => void;
  tags: string[];
}

export default function TagsList({ tags, handleTag }: TagsListProps) {
  return (
    <View>
      <ComponentLabel text="Tags (up to 3)" />
      <View style={styles.tagsContainer}>
        {availableTags.map((tag) => {
          const isActive = tags.includes(tag);
          return <TagBtn tag={tag} isActive={isActive} key={tag} onPress={() => handleTag(isActive, tag)} />;
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tagsContainer: { flexDirection: "row", flexWrap: "wrap", gap: 8 },
});
