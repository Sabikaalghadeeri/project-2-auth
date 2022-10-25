
// const Sequelize = require("sequelize");
const db = require('./models')
db.tea.bulkCreate(
    [
        {
            "id": 1,
            "type": "Black Tea",
            "source": "Made from the camellia sinesis Tea plant, fully or almost fully oxidized",
            "varities": "Assam Tea, Earl Grey Tea, Darjeeling Tea,English Breakfast Tea",
            "advantages": "Protects lung damage caused by exposure to cigarette smoke, Expands airways making breathing easier for asthmatics, Improves brain function",
            "color": "Black",
            "origin": "China"
            },
            {
            "id": 2,
            "type": "Green Tea",
            "source": "Made from Camellia sinensis Tea plant, that have not undergone the same withering or unoxidized.",
            "varities": "Matcha,Sencha,Gunpowder Tea, Dragonwell Green Tea",
            "advantages": "Prevents aging,Reduce Risk of Stroke, Antioxidants interferes with growth of cancers",
            "color": "Green",
            "origin": "China"
            },
            {
            "id": 3,   
            "type": "Herbal Tea",
            "source": "Made from infused dried herbs,fruits, and flowers",
            "varities": "Hibiscus Tea,Peppermint,Chamomile Tea,Yerba Mate",
            "advantages": "Fights the Cold,Improves Digestion,Relieve Stress and Anxiety,Lower Blood Pressure",
            "color": "Brown",
            "origin": "Ancient Egypt and Ancient China"
            },
            {
            "id": 4,
            "type": "White Tea",
            "source": "Made for Camellia sinensis , slightly oxidized - buds covered by minuscule white hairs are harvested",
            "varities": "Silver Needle, White Peony",
            "advantages": "Reduce the Risk of Heart Disease,More potent anticancer properties than processed Teas, Lower risk  of insulin resistance",
            "color": "Slightly brown",
            "origin": "China"
            },
            {
            "id": 5,
            "type": "Oolang Tea",
            "source": "Made for Camellia sinensis plant - partially oxidized",
            "varities": "Ti Kuan Yin (Iron Goddess of Mercy),Dan Cong (Phoenix Tea)",
            "advantages": "Helps to lower cholesterol levels,Possible use as weight loss supplement, Helps people with diabetes to keep sugar level in line",
            "color": "Light orange",
            "origin": "China"
            },
            {
            "id": 6,
            "type": "Rooibos Tea",
            "source": "Made from dried rooibos plant - partially oxidized",
            "varities": "Red Rooibos,Green Rooibos",
            "advantages": "Posses some cancer fighting properties, Aids in regeneration of liver tissues, Helps to reduce cramps and grastrointestinal distress",
            "color": "Saffron",
            "origin": "South Africa"
            }
    ],
   
  ).then(() => console.log("Users data have been saved"));