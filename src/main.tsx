import { createRoot } from 'react-dom/client'
import { createRootRoute, createRoute, createRouter, RouterProvider } from '@tanstack/react-router'
import { AppShell, LandingPage, QuizPage, ResultsPage, MethodPage, AxesPage } from './ui/App'
import './ui/styles.css'

const rootRoute = createRootRoute({ component: AppShell })
const indexRoute = createRoute({ getParentRoute: () => rootRoute, path: '/', component: LandingPage })
const quizRoute = createRoute({ getParentRoute: () => rootRoute, path: '/quiz/$variant', component: QuizPage })
const testRoute = createRoute({ getParentRoute: () => rootRoute, path: '/test/$length/$question', component: QuizPage })
const resultsRoute = createRoute({ getParentRoute: () => rootRoute, path: '/results', component: ResultsPage })
const methodRoute = createRoute({ getParentRoute: () => rootRoute, path: '/metodologia', component: MethodPage })
const axesRoute = createRoute({ getParentRoute: () => rootRoute, path: '/eixos', component: AxesPage })
const axisDetailRoute = createRoute({ getParentRoute: () => rootRoute, path: '/eixos/$axis', component: AxesPage })
const routeTree = rootRoute.addChildren([indexRoute, quizRoute, testRoute, resultsRoute, methodRoute, axesRoute, axisDetailRoute])
const router = createRouter({ routeTree, defaultPreload: 'intent', defaultViewTransition: true, scrollRestoration: true })
declare module '@tanstack/react-router' { interface Register { router: typeof router } }

createRoot(document.getElementById('root')!).render(<RouterProvider router={router} />)
