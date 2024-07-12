const products = [
    {
        "id": 1,
        "name":"Zapatillas Circa 205 Vulc Blanco Negro",
        "size":[39, 40, 41, 42],
        "price": 95990,
        "image": "./img/zapatillas/zapas_1.png",
        "description": "Zapatillas Circa 205 Vulc Blanco Negro. Zapatillas de skate vulcanizadas con cierre de velcro ajustable y extraíble colocado encima de los cordones para mayor protección del tobillo. Suela exterior fabricada con la patente exclusiva C1RCA FusionGrip™ para ofrecer el máximo agarre y la auténtica sensibilidad de tu skate. Silueta de bajo perfil estilo Converse"
    },
    {
        "id": 2,
        "name":"Zapatillas Dc Versatile Rs Negro Amarillo Gris",
        "size":[39, 40, 41, 42],
        "price": 164999,
        "image": "./img/zapatillas/zapas_2.png",
        "description": "Las Zapatillas Dc Versatile Rs Negro Amarillo Gris destacan por su combinación de materiales de alta calidad y diseño pensado para el confort. Con una capellada de cuero sintético o nobuck, aseguran durabilidad y elegancia. La plantilla de EVA proporciona una amortiguación óptima, mientras que la forrería de mesh respirable mantiene el pie fresco. Detalles adicionales como la espuma en el cuello y la lengueta brindan un soporte inigualable, asegurando comodidad en cada paso."
    },
    {
        "id": 3,
        "name":"Zapatillas Vans M Skate Old Skool Negro Blanco",
        "size":[39, 40, 41, 42],
        "price": 158900,
        "image": "./img/zapatillas/zapas_3.png",
        "description": "La nueva línea Skate Classics, con un diseño totalmente nuevo pensado para los skaters, ofrece más de lo que estos necesitan para lograr la máxima progresión. Las zapatillas Skate Classics Old Skool, dotadas de unas palas completamente rediseñadas, un contrafuerte moldeado, una lengüeta con correas de fijación y un refuerzo DURACAP™, ofrecen un ajuste perfecto, así como un mayor nivel de transpiración y resistencia allí donde los skaters más lo necesitan."
    },
    {
        "id": 4,
        "name":"Zapatillas Dc Crisis SS Negro Beige Blanco",
        "size":[39, 40, 41, 42],
        "price": 99900,
        "image": "./img/zapatillas/zapas_4.png",
        "description": "Las Zapatillas Dc Crisis SS Negro&nbsp; son la elección perfecta para aquellos que buscan una combinación de estilo y comodidad. La capellada de estas zapatillas está hecha de descarne vacuno, lo que las hace resistentes y duraderas. La puntera despejada y el logo lateral en relieve aportan un toque de estilo adicional. El cuello y la lengüeta acolchados con espuma garantizan una mayor comodidad y soporte para tus pies, mientras que la forrería de malla proporciona una excelente ventilación y frescura, manteniendo tus pies secos y cómodos en todo momento. Los agujeros laterales también mejoran la respirabilidad, permitiendo que el aire fluya libremente."
    },
    {
        "id": 5,
        "name":"Buzo Circa Commit Ranglan Gris Melange",
        "size":["S", "M", "L", "XL"],
        "price": 58990,
        "image": "./img/buzos/buzo_1.png",
        "description": "Buzo de friza esmerilada, con bolsillo frontal tipo canguro y capucha forrada en jersey a tono. Ojalillos metálicos, cordón plano a tono y puños de ribb. Estampa en el frente a un color. Avíos personalizados."
    },
    {
        "id": 6,
        "name":"Buzo Dc Crew Concrete Verde",
        "size":["S", "M", "L", "XL"],
        "price": 50400,
        "image": "./img/buzos/buzo_2.png",
        "description": "El Buzo Dc Crew Concrete Verde es una prenda cómoda y estilosa para cualquier ocasión. Fabricado con 100% algodón y tejido de frisa pesada, este buzo de cuello redondo ofrece durabilidad y comodidad."
    },
    {
        "id": 7,
        "name":"Buzo Santa Cruz Rustic Batik Multicolor",
        "size":["S", "M", "L", "XL"],
        "price": 44900,
        "image": "./img/buzos/buzo_3.png",
        "description": "El buzo Rustic Batik es una prenda cómoda y con estilo. Está hecho de vellón batik multicolor, brindando suavidad y calidez. Cuenta con etiquetas tejidas que añaden un toque auténtico. Con detalles de ojal en el dobladillo y un estampado frontal, este buzo destaca por su diseño único. Es una opción perfecta para lucir un look casual y moderno."
    },
    {
        "id": 8,
        "name":"Buzo Vans Classic Crew II Negro",
        "size":["S", "M", "L", "XL"],
        "price": 49900,
        "image": "./img/buzos/buzo_4.png",
        "description": "Este Buzo Vans Classic Crew II Negro con escote redondo está confeccionado en frisa, ofreciendo calidez y comodidad. Presenta una estampa llamativa en el frente que agrega un toque de estilo. Incluye una etiqueta de marca y talle para mayor información y autenticidad. La grifa Vans asegura calidad y autenticidad. Cuenta con una cinta interior personalizada, proporcionando un detalle único y distintivo. Este buzo combina moda y funcionalidad para un look casual y a la moda."
    },
    {
        "id": 9,
        "name":"Remera Dc Tracer Amarillo",
        "size":["S", "M", "L", "XL"],
        "price": 31990,
        "image": "img/remeras/remera_1.png",
        "description": "TELA 100% Algodón. Remera manga corta. Tejido: Jersey 30.1 Melange. Fit: Regular. Avios DC."
    },
    {
        "id": 10,
        "name":"Remera Circa Escape Grislo",
        "size":["S", "M", "L", "XL"],
        "price": 21490,
        "image": "img/remeras/remera_2.png",
        "description": "Esta Remera Circa Escape Gris tiene un estilo de manga corta con una estampa en la parte frontal. Está fabricada completamente en algodón y ha sido confeccionada en Argentina. Remera manga corta. Estampa en la parte frontal. 100% Algodón. Hecho en Argentina."
    },
    {
        "id": 11,
        "name":"Remera Santa Cruz Kendall Eotw Blanco",
        "size":["S", "M", "L", "XL"],
        "price": 29900,
        "image": "img/remeras/remera_3.png",
        "description": "Camiseta de manga corta para hombre de ajuste regular con una serigrafía del punto 'End Of The World' de Jeff Kendall."
    },
    {
        "id": 12,
        "name":"Remera Vans Full Patch Back Naranja",
        "size":["S", "M", "L", "XL"],
        "price": 34990,
        "image": "img/remeras/remera_4.png",
        "description": "La camiseta Vans Full Patch Back te cubre de costa a costa y de todo el mundo. Las serigrafías de Vans se encuentran en el lado izquierdo del pecho y en la espalda. Hecha de 100% algodón, esta camiseta ofrece un uso ligero y cómodo. Además, cuenta con una etiqueta tejida en la manga izquierda y un cómodo cuello interior protegido."
    }

];
// export default products;