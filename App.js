import "react-native-gesture-handler";
import "react-native-reanimated";
import {
  configureReanimatedLogger,
  ReanimatedLogLevel,
} from "react-native-reanimated";
import * as React from "react";
import { TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome,
  Octicons,
} from "@expo/vector-icons";
import WalkthroughScreen from "./loginScreens/WalkthroughScreen";
import SignupScreen from "./loginScreens/SignupScreen";
import LoginScreen from "./loginScreens/LoginScreen";
import EnterEmailScreen from "./loginScreens/EnterEmailScreen";
import EnterCodeScreen from "./loginScreens/EnterCodeScreen";
import ForgotPasswordScreen from "./loginScreens/ForgotPasswordScreen";
import NewsfeedStack from "./stacks/NewsfeedStack";
import GroupsStack from "./stacks/GroupsStack";
import NFCStack from "./stacks/NFCStack";
import MessagesStack from "./stacks/MessagesStack";
import ProfileStack from "./stacks/ProfileStack";

configureReanimatedLogger({
  level: ReanimatedLogLevel.warn,
  strict: false,
});

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainTabs = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Newsfeed Tab"
        component={NewsfeedStack}
        options={{
          tabBarIcon: ({ focused }) => {
            let name = focused ? "home-sharp" : "home-outline";
            return <Ionicons name={name} size={23} color="black" />;
          },
        }}
      />
      <Tab.Screen
        name="Groups Tab"
        component={GroupsStack}
        options={{
          tabBarIcon: ({ focused }) => {
            let name = focused ? "account-group" : "account-group-outline";
            return (
              <MaterialCommunityIcons name={name} size={28} color="black" />
            );
          },
        }}
      />
      <Tab.Screen
        name="NFC Tab"
        component={NFCStack}
        options={{
          tabBarIcon: ({ focused }) => {
            let color = focused ? "black" : "grey";
            return (
              <MaterialCommunityIcons name="nfc" size={25} color={color} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Messages Tab"
        component={MessagesStack}
        options={{
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return <FontAwesome name="inbox" size={24} color="black" />;
            } else {
              return <Octicons name="inbox" size={20} color="black" />;
            }
          },
        }}
      />
      <Tab.Screen
        name="Profile Tab"
        component={ProfileStack}
        options={{
          tabBarIcon: ({ focused }) => {
            let name = focused ? "account" : "account-outline";
            return (
              <MaterialCommunityIcons name={name} size={24} color="black" />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  const [authenticated, setAuthenticated] = React.useState(false);

  return (
    <NavigationContainer>
      {authenticated ? (
        <MainTabs />
      ) : (
        <Stack.Navigator>
          <Stack.Screen name="Walkthrough" options={{ headerShown: false }}>
            {(props) => <WalkthroughScreen {...props} />}
          </Stack.Screen>
          <Stack.Screen
            name="Signup"
            component={SignupScreen}
            options={() => ({
              headerTitle: "Sign up",
              headerShadowVisible: false,
              headerLeft: null,
            })}
          />
          <Stack.Screen
            name="Login"
            options={() => ({
              headerTitle: "Log in",
              headerShadowVisible: false,
              headerLeft: null,
            })}
          >
            {(props) => (
              <LoginScreen {...props} setAuthenticated={setAuthenticated} />
            )}
          </Stack.Screen>
          <Stack.Screen
            name="ForgotPassword"
            options={({ navigation }) => ({
              headerTitle: "Forgot Password",
              headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Ionicons
                    name="chevron-back-outline"
                    size={24}
                    color="black"
                    style={{ marginLeft: 16 }}
                  />
                </TouchableOpacity>
              ),
            })}
          >
            {(props) => (
              <ForgotPasswordScreen
                {...props}
                setAuthenticated={setAuthenticated}
              />
            )}
          </Stack.Screen>
          <Stack.Screen
            name="EnterEmail"
            component={EnterEmailScreen}
            options={({ navigation }) => ({
              headerTitle: "",
              headerShadowVisible: false,
              headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Ionicons
                    name="chevron-back-outline"
                    size={24}
                    color="black"
                    style={{ marginLeft: 16 }}
                  />
                </TouchableOpacity>
              ),
            })}
          />
          <Stack.Screen
            name="EnterCode"
            options={({ navigation }) => ({
              headerTitle: "",
              headerShadowVisible: false,
              headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Ionicons
                    name="chevron-back-outline"
                    size={24}
                    color="black"
                    style={{ marginLeft: 16 }}
                  />
                </TouchableOpacity>
              ),
            })}
          >
            {(props) => (
              <EnterCodeScreen {...props} setAuthenticated={setAuthenticated} />
            )}
          </Stack.Screen>
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
