import WeatherApp from './components/WeatherApp'
import { ErrorBoundary } from 'react-error-boundary';
import {ErrorComponent} from './components/ErrorComponent/ErrorComponent'

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorComponent} >
      <WeatherApp />
    </ErrorBoundary>
    
  )
}

export default App;
