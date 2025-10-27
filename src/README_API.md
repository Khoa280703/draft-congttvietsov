# API Structure with React Query

## Overview

This project uses React Query (TanStack Query) for API state management with a clean, organized structure.

## Structure

```
src/
├── types/
│   └── api.ts                    # API TypeScript types
├── config/
│   └── api.ts                    # Consolidated API configuration
├── services/
│   ├── shared/                    # Shared API utilities
│   │   ├── apiClient.ts          # Base API client
│   │   └── index.ts              # Export all shared utilities
│   ├── public/                   # Public system APIs
│   │   ├── news/
│   │   │   ├── newsService.ts    # News API calls
│   │   │   ├── categoriesService.ts # Categories API calls
│   │   │   └── index.ts          # Export news services
│   │   └── index.ts              # Export all public services
│   └── internal/                 # Internal system APIs
│       ├── dashboard/
│       │   ├── dashboardService.ts
│       │   └── index.ts
│       └── index.ts              # Export all internal services
├── hooks/
│   ├── public/
│   │   └── useNewsQueries.ts     # Public React Query hooks
│   ├── internal/
│   │   └── useDashboardQueries.ts # Internal React Query hooks
│   └── useQueries.ts             # Re-export all hooks
├── lib/
│   └── queryKeys.ts              # Query keys for consistent caching
└── components/examples/
    └── ReactQueryExample.tsx     # Single comprehensive example
```

## Usage Examples

### Public API Usage

```typescript
import { useCategories, useFeaturedNews } from "@/hooks/useQueries";

const MyComponent = () => {
  const { data: categories, isLoading, error } = useCategories();
  const { data: featuredNews } = useFeaturedNews();

  // Use the data...
};
```

### Internal API Usage

```typescript
import { useDashboardStats } from "@/hooks/useQueries";

const DashboardComponent = () => {
  const { data: stats, isLoading, error } = useDashboardStats();

  // Use the data...
};
```

### Direct Service Usage

```typescript
import { NewsService } from "@/services/public/news";

const data = await NewsService.getFeaturedNews();
```

## Benefits

1. **React Query Integration**: Automatic caching, background refetching, and optimistic updates
2. **Type Safety**: Full TypeScript support with proper interfaces
3. **Organized Structure**: Clear separation between public and internal APIs
4. **Consistent Caching**: Centralized query keys for consistent cache management
5. **Error Handling**: Built-in error states and retry logic
6. **Loading States**: Automatic loading state management
7. **Deduplication**: Automatic request deduplication
8. **DevTools**: React Query DevTools for debugging

## Query Keys

All query keys are centralized in `src/lib/queryKeys.ts` for consistent caching and invalidation.

## Configuration

- **Public API**: `https://vietsovadminapi.sfb.vn/api`
- **Internal API**: `https://vietsovadminapi.sfb.vn/api/internal`
- **Timeout**: 10 seconds for public, 15 seconds for internal
- **Retry**: Automatic retry with exponential backoff
