import Header from '@/components/Header';
import Select from '@/components/Select';
import Link from 'next/link';

const years = [
  '2003',
  '2004',
  '2005',
  '2006',
  '2007',
  '2008',
  '2009',
  '2010',
  '2011',
  '2012',
  '2013',
  '2014',
  '2015',
];

export default function index() {
  return (
    <div>
      <Link href={'/2003'}>Clique aqui</Link>
    </div>
  );
}
