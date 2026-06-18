// Zewnętrzne zdjęcia stockowe zamiast placeholderów SVG.
// Logo oraz ikonka ziarenka kawy zostają osobno w komponentach i nie są tu podmieniane.
const unsplash = (id: string, w = 1400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&q=80&w=${w}`;

export const stockImages = {
  cafeInterior: unsplash('photo-1501339847302-ac426a4a7cbb', 1600),
  coffeeCup: unsplash('photo-1495474472287-4d71bcdd2085', 1400),
  coffeeBeans: unsplash('photo-1447933601403-0c6688de566e', 1400),
  barista: unsplash('photo-1511920170033-f8396924c348', 1400),
  pastryCounter: unsplash('photo-1517433670267-08bbd4be890f', 1400),
  cake: unsplash('photo-1578985545062-69928b1d9587', 1400),
  tart: unsplash('photo-1464305795204-6f5bbfc7fb81', 1400),
  cookies: unsplash('photo-1558961363-fa8fdf82db35', 1400),
  chocolate: unsplash('photo-1511381939415-e44015466834', 1400),
  coffeeBag: unsplash('photo-1514432324607-a09d9b4aefdd', 1400),
  takeaway: unsplash('photo-1544787219-7f47ccb76574', 1400),
  dogCafe: unsplash('photo-1548199973-03cce0bbc87b', 1400),
  tableCoffee: unsplash('photo-1521017432531-fbd92d768814', 1400),
  bakeryBox: unsplash('photo-1608198093002-ad4e005484ec', 1400)
};
