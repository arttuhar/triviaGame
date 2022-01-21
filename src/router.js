import { createRouter, createWebHistory } from "vue-router";
import StartScreen from "./views/StartScreen.vue";
import QuestionScreen from "./views/QuestionScreen.vue";
import ResultsScreen from "./views/ResultsScreen.vue";

const routes = [
	{
		path: "/",
		component: StartScreen,
	},
	{
		path: "/questions",
		component: QuestionScreen,
	},
	{
		path: "/results",
		component: ResultsScreen,
	},
];

export default createRouter({
	history: createWebHistory(),
	routes,
});
