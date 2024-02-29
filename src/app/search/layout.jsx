import SearchHeader from '@/components/SearchHeader';

export default function LayoutSearch({ children }) {
  return (
    <div>
      <SearchHeader />
      {children}
    </div>
  );
}
