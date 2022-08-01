export const Footer = () => {
  return (
    <footer class="bg-gray-800">
      <div class="grid grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4">
        <div>
          <h2 class="mb-6 text-sm font-semibold text-gray-400 uppercase">
            Delivery Food
          </h2>
          <ul class="text-gray-300">
            <li class="mb-4">
              <a href="#" className=" hover:underline">
                О нас
              </a>
            </li>
            <li class="mb-4">
              <a href="#" className="hover:underline">
                Меню
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 class="mb-6 text-sm font-semibold text-gray-400 uppercase">
            Legal
          </h2>
          <ul class="text-gray-300">
            <li class="mb-4">
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li class="mb-4">
              <a href="#" className="hover:underline">
                Licensing
              </a>
            </li>
            <li class="mb-4">
              <a href="#" className="hover:underline">
                Terms &amp; Conditions
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="py-6 px-4 bg-gray-700 md:flex md:items-center md:justify-between">
        <span class="text-sm text-gray-300 sm:text-center">
          © 2022 Food Delivery. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};
