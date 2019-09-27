import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import MainScreen from "./Screens/MainScreen";
import ExercisesPage from "./Screens/ExercisesPage";
import ExercisesPage1 from "./Screens/ExercisesPage1";
import ExercisesPage2 from "./Screens/ExercisesPage2";
import ExercisesTypes from "./Screens/ExercisesTypes";
import Numbers from "./Screens/Numbers";
import QuizLevels from "./Screens/QuizLevels";
import QuizPage from "./Screens/QuizPage";

const MathNavigator = createStackNavigator(
  {
    Main: MainScreen,
    ExercisesPage: ExercisesPage,
    ExercisesPage1:ExercisesPage1,
    ExercisesPage2:ExercisesPage2,
    ExercisesTypes: ExercisesTypes,
    Numbers: Numbers,
    QuizLevels: QuizLevels,
    QuizPage: QuizPage
  },
  { headerLayoutPreset: "center" }
);

export default createAppContainer(MathNavigator);

// import { createStackNavigator, createAppContainer } from 'react-navigation';

// import Main from './Screens/Main';

// const MealsNavigator = createStackNavigator({
//   test: Main
// });

// export default createAppContainer(MealsNavigator);
