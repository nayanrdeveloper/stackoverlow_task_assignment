import { Linking } from "react-native";

export const handleOpenLink = async (url) => {
  // Todo : remove error log and show in toast message or modal
  try {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      throw new Error("Cannot open URL");
    }
  } catch (error) {
    throw new Error("Error opening URL");
  }
};
