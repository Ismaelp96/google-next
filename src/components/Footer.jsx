import CountryLookup from './CountryLookup';

export default function Footer() {
  return (
    <footer className='absolute bottom-0 text-sm text-gray-500 bg-[#f2f2f2] w-full'>
      <div className='border-b px-8 py-3'>
        <CountryLookup />
      </div>
      <div className='flex flex-col sm:flex-row justify-between items-center px-8 py-3 space-y-7 sm:space-y-0'>
        <ul className='flex items-center space-x-6'>
          <li className='hover:underline'>About</li>
          <li className='hover:underline'>Advertising</li>
          <li className='hover:underline'>Business</li>
          <li className='hover:underline'>How Search works</li>
        </ul>
        <ul className='flex items-center space-x-6'>
          <li className='hover:underline'>Privacy</li>
          <li className='hover:underline'>Terms</li>
          <li className='hover:underline'>Settings</li>
        </ul>
      </div>
    </footer>
  );
}
