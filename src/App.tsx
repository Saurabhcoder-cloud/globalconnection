
import { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'next-themes';
import { Toaster } from 'sonner';
import './App.css';
import { AppRoutes } from './router';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <Router>
          <Suspense
            fallback={
              <div className="flex min-h-screen items-center justify-center bg-background text-foreground">
                <div className="space-y-2 text-center">
                  <div className="h-10 w-10 animate-spin rounded-full border-4 border-emerald-500 border-t-transparent" />
                  <p className="text-sm text-muted-foreground">Loading Global Connection...</p>
                </div>
              </div>
            }
          >
            <AppRoutes />
          </Suspense>
          <Toaster />
        </Router>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;