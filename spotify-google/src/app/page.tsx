import Image from "next/image";
import { RecoilRoot } from  'recoil';
import { QueryClient, QueryClientProvider } from "react-query";
import Search from "@/components/Search";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10_000
    }
  }
});

export default function Home() {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Search />
      </QueryClientProvider>
    </RecoilRoot>
  );
}
