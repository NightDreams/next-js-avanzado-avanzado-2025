import { Heading, Text } from '@chakra-ui/react';

import { Bookmark } from '@/components/bookmark';
import { BookmarkType } from './schema';

// async
// kill effect, statte hooks
export default async function Bookmarks() {
  const boomarksResponse = await fetch('http://localhost:3000/bookmarks/api');

  const bookmarks = (await boomarksResponse.json()) as {
    data: BookmarkType[];
  };

  return (
    <main className="mt-12">
      <header className="">
        <Heading size="lg" className="mb-1">
          Marcadores
        </Heading>
        <Text>
          Estrategías de consumo de datos desde el servidor y el cliente
        </Text>
      </header>

      <ul className="text-lg mt-10">
        {bookmarks?.data.map((bookmark) => (
          <li className="border-b-2 py-4 px-6 my-2" key={bookmark.id}>
            <Bookmark {...bookmark} />
            {/* <div className="my-1 text-gray-600 text-xs ml-7">
              Creado por {bookmark.author?.name || "Anónimo"}
            </div> */}
          </li>
        ))}
      </ul>
    </main>
  );
}
