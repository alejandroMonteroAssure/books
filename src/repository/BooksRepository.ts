import type { Book } from "../components/BookCardInList/BookCardInList";

export const books: Book[] = [
  {
    bookId: 1,
    title: "The Name of the Wind",
    author: "Patrick Rothfuss",
    description:
      "Kvothe, un músico prodigioso y mago en ciernes, narra su vida desde una infancia marcada por la tragedia hasta su llegada a la Universidad, donde el conocimiento es poder y peligro. Su voz mezcla lirismo, ingenio y dolor mientras busca el verdadero nombre de las cosas. En el fondo late una pregunta: ¿es posible controlar la historia que otros cuentan sobre ti?",
    url: "https://covers.openlibrary.org/b/isbn/9780756404741-L.jpg",
    tags: ["fantasy", "epic", "magic", "coming-of-age"]
  },
  {
    bookId: 2,
    title: "The Hobbit",
    author: "J. R. R. Tolkien",
    description:
      "Bilbo Bolsón, un hobbit amante de la comodidad, es arrastrado a una aventura con trece enanos y el mago Gandalf para recuperar un tesoro custodiado por un dragón. En el camino descubrirá el valor, la astucia y un misterioso anillo. Es un viaje iniciático que demuestra que los héroes pueden venir de los lugares más tranquilos.",
    url: "https://covers.openlibrary.org/b/isbn/9780547928227-L.jpg",
    tags: ["fantasy", "adventure", "classic"]
  },
  {
    bookId: 3,
    title: "1984",
    author: "George Orwell",
    description:
      "En una sociedad totalitaria donde el Gran Hermano vigila cada pensamiento, Winston Smith intenta conservar su humanidad. El lenguaje se manipula para borrar la verdad y el pasado se reescribe día a día. Es una advertencia inquietante sobre el poder del control y la fragilidad de la libertad individual.",
    url: "https://covers.openlibrary.org/b/isbn/9780451524935-L.jpg",
    tags: ["dystopia", "political", "classic", "surveillance", "philosophy"]
  },
  {
    bookId: 4,
    title: "Brave New World",
    author: "Aldous Huxley",
    description:
      "Un mundo diseñado para la felicidad a base de condicionamiento, consumo y soma oculta un precio: la renuncia a la autenticidad y al conflicto que nos hace humanos. Cuando llega un ‘salvaje’ que no encaja en ese orden perfecto, las grietas del sistema se hacen visibles. Una sátira visionaria sobre el placer sin sentido y la ingeniería social.",
    url: "https://covers.openlibrary.org/b/isbn/9780060850524-L.jpg",
    tags: ["dystopia", "satire", "science-fiction", "social-critique"]
  },
  {
    bookId: 5,
    title: "Fahrenheit 451",
    author: "Ray Bradbury",
    description:
      "Los bomberos no apagan incendios: queman libros. Guy Montag, uno de ellos, empieza a cuestionar su trabajo tras conocer a una joven que ama la curiosidad. La novela explora la censura, la apatía y la necesidad de pensar por cuenta propia en un mundo saturado de pantallas.",
    url: "https://covers.openlibrary.org/b/isbn/9781451673319-L.jpg",
    tags: ["dystopia", "censorship", "classic", "speculative"]
  },
  {
    bookId: 6,
    title: "The Catcher in the Rye",
    author: "J. D. Salinger",
    description:
      "Holden Caulfield vaga por Nueva York durante unos días que se sienten eternos, intentando encontrar una verdad que no suene falsa. Su voz, cínica y vulnerable, retrata la dificultad de crecer sin perder la sensibilidad. Es un retrato crudo de la adolescencia y la alienación.",
    url: "https://covers.openlibrary.org/b/isbn/9780316769488-L.jpg",
    tags: ["classic", "coming-of-age", "literary"]
  },
  {
    bookId: 7,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    description:
      "A través de los ojos de Scout, una niña en el sur de EE. UU., presenciamos un juicio que expone el racismo estructural. Su padre, Atticus Finch, defiende la justicia incluso cuando la comunidad se le vuelve en contra. Una historia de empatía, coraje moral y pérdida de la inocencia.",
    url: "https://covers.openlibrary.org/b/isbn/9780061120084-L.jpg",
    tags: ["classic", "civil-rights", "courtroom", "literary"]
  },
  {
    bookId: 8,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    description:
      "Jay Gatsby organiza fiestas deslumbrantes para atraer a un amor del pasado que brilla como un faro. Bajo el brillo de la era del jazz se esconde la fragilidad de los sueños y el costo de la ambición. Un retrato elegante y trágico del deseo y la imposibilidad de recuperar el tiempo.",
    url: "https://covers.openlibrary.org/b/isbn/9780743273565-L.jpg",
    tags: ["classic", "jazz-age", "tragedy"]
  },
  {
    bookId: 9,
    title: "Moby-Dick",
    author: "Herman Melville",
    description:
      "Ismael se embarca en el Pequod, donde el capitán Ahab persigue obsesivamente a la gran ballena blanca. La novela combina aventura marítima, filosofía y obsesión metafísica. Es un viaje a los límites del deseo humano y de la naturaleza indomable.",
    url: "https://covers.openlibrary.org/b/isbn/9780142437247-L.jpg",
    tags: ["classic", "sea-adventure", "obsession", "philosophy"]
  },
  {
    bookId: 10,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    description:
      "Elizabeth Bennet choca con el orgulloso señor Darcy en una danza de ingenio, prejuicios y descubrimientos mutuos. Entre bailes y malentendidos, la autora disecciona las normas sociales y la independencia femenina. Un clásico brillante de humor y sutileza emocional.",
    url: "https://covers.openlibrary.org/b/isbn/9780141439518-L.jpg",
    tags: ["classic", "romance", "regency", "wit"]
  },
  {
    bookId: 11,
    title: "The Picture of Dorian Gray",
    author: "Oscar Wilde",
    description:
      "Dorian desea que su retrato envejezca por él, y el cuadro asume el peso de sus excesos. La belleza sin conciencia se convierte en condena. Una fábula decadente sobre el hedonismo, la moral y el precio de la vanidad.",
    url: "https://covers.openlibrary.org/b/isbn/9780141439570-L.jpg",
    tags: ["classic", "gothic", "decadence", "faustian"]
  },
  {
    bookId: 12,
    title: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
    description:
      "Raskólnikov comete un crimen convencido de que su intelecto lo sitúa por encima de la ley. La culpa lo desgarra y lo empuja a un duelo interior entre el orgullo y la redención. Un clásico de psicología profunda y dilemas morales.",
    url: "https://covers.openlibrary.org/b/isbn/9780140449136-L.jpg",
    tags: ["classic", "psychological", "russian-literature", "morality"]
  },
  {
    bookId: 13,
    title: "The Alchemist",
    author: "Paulo Coelho",
    description:
      "Un pastor andaluz sueña con un tesoro y viaja por el desierto para encontrar su destino. En cada encuentro aprende a escuchar a su corazón y a leer los presagios. Una parábola sobre el sentido, la búsqueda y la fe en la propia leyenda personal.",
    url: "https://covers.openlibrary.org/b/isbn/9780061122415-L.jpg",
    tags: ["parable", "inspirational", "quest"]
  },
  {
    bookId: 14,
    title: "The Little Prince",
    author: "Antoine de Saint-Exupéry",
    description:
      "Un aviador conoce a un niño de otro planeta que le habla de volcanes, rosas y adultos que han olvidado lo esencial. Con ternura y melancolía, el relato explora el amor, la amistad y la mirada limpia. Un libro pequeño que se agranda con cada relectura.",
    url: "https://covers.openlibrary.org/b/isbn/9780156012195-L.jpg",
    tags: ["classic", "children", "philosophy", "allegory"]
  },
  {
    bookId: 15,
    title: "The Road",
    author: "Cormac McCarthy",
    description:
      "Un padre y su hijo avanzan por una tierra arrasada donde sobrevivir exige dureza y compasión a la vez. La prosa austera enmarca una historia ferozmente humana. Es una meditación sobre el amor como última chispa en la oscuridad.",
    url: "https://covers.openlibrary.org/b/isbn/9780307387899-L.jpg",
    tags: ["post-apocalyptic", "literary", "survival"]
  },
  {
    bookId: 16,
    title: "The Kite Runner",
    author: "Khaled Hosseini",
    description:
      "Amir y Hassan comparten juegos, silencios y una traición que perseguirá al primero durante años. Entre Kabul y California, la culpa se convierte en impulso para reparar. Una novela emotiva sobre la amistad, la vergüenza y el perdón.",
    url: "https://covers.openlibrary.org/b/isbn/9781594631931-L.jpg",
    tags: ["drama", "friendship", "afghanistan", "redemption"]
  },
  {
    bookId: 17,
    title: "The Wise Man's Fear",
    author: "Patrick Rothfuss",
    description:
      "Kvothe abandona la Universidad para enfrentarse a duelos, cortes y caminos peligrosos, siempre persiguiendo secretos antiguos. Sus dones y sus sombras crecen a la par. Una continuación expansiva donde la leyenda se forja a base de heridas y canciones.",
    url: "https://covers.openlibrary.org/b/isbn/9780756407124-L.jpg",
    tags: ["fantasy", "epic", "adventure", "magic", "legend"]
  },
  {
    bookId: 18,
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J. K. Rowling",
    description:
      "Harry descubre que es mago y entra en Hogwarts, un lugar donde las escaleras se mueven y los amigos se vuelven familia. Entre clases y misterios, se enfrenta a un pasado que regresa. Es el comienzo de una saga sobre coraje, lealtad y elección.",
    url: "https://covers.openlibrary.org/b/isbn/9780590353427-L.jpg",
    tags: ["fantasy", "young-adult", "school", "friendship"]
  },
  {
    bookId: 19,
    title: "Harry Potter and the Chamber of Secrets",
    author: "J. K. Rowling",
    description:
      "Voces en las paredes, mensajes grabados y alumnos petrificados ponen a Hogwarts en alerta. Harry y sus amigos deberán descifrar una historia enterrada en la escuela. La infancia da paso a peligros más oscuros y responsabilidades más grandes.",
    url: "https://covers.openlibrary.org/b/isbn/9780439064873-L.jpg",
    tags: ["fantasy", "mystery", "young-adult"]
  },
  {
    bookId: 20,
    title: "The Lord of the Rings: The Fellowship of the Ring",
    author: "J. R. R. Tolkien",
    description:
      "Un anillo de poder amenaza a la Tierra Media y una compañía heterogénea parte para destruirlo. La amistad, la tentación y el sacrificio se entrelazan en un viaje que excede a sus protagonistas. Un hito de la fantasía épica que redefinió el género.",
    url: "https://covers.openlibrary.org/b/isbn/9780261103573-L.jpg",
    tags: ["fantasy", "epic", "quest", "middle-earth", "classic"]
  }
];
