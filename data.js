import { Vocabulary, VocabType } from "./VocabularyClass.js"

const foods = [
    new Vocabulary("Biscuits (biskit)", "Bánh bích quy"),
    new Vocabulary("Milk (milk)", "Sữa"),
    new Vocabulary("An apple (æpl)", "Quả táo"),
    new Vocabulary("Rice (rais)", "Cơm"),
    new Vocabulary("Toast (toust)", "Ổ bánh mỳ"),
    new Vocabulary("Bread (bred)", "Bánh mỳ"),
    new Vocabulary("Sausages (sɔsidʤ)", "Xúc xích"),
    new Vocabulary("Fish (fiʃ)", "Cá"),
    new Vocabulary("Eggs (egs)", "Trứng"),
    new Vocabulary("Coffee (kɔfi)", "Cà phê"),
    new Vocabulary("Soup (su:p)", "Xúp, canh; cháo"),
    new Vocabulary("Cheese (tʃi:z)", "Phó mát, bánh phó mát"),
    new Vocabulary("Vegetables (vedʤitəbl)", "Rau"),
    new Vocabulary("a Banana (bə'nɑ:nə)", "Chuối"),
    new Vocabulary("Orange juice (dʤu:s)", "Nước cam"),
    new Vocabulary("Tea (ti:)", "Trà"),
    new Vocabulary("Jam (dʤæm)", "MỨT"),
    new Vocabulary("Meat (mi:t)", "Thịt"),
    new Vocabulary("Fruit (fru:t)", "Qủa, trái cây"),
    new Vocabulary("Cereal(siəriəl)", "Ngũ cốc")
];

const frequencies = [
    new Vocabulary("Always (ɔ:lwəz)", "Luôn luôn"),
    new Vocabulary("Usually (ju: u li)", "Thường xuyên"),
    new Vocabulary("Generally (dʤenərəli)", "Thông thường, thường lệ"),
    new Vocabulary("Frequently (ˈfrēkwəntlē)", "Thường thường"),
    new Vocabulary("Sometimes (sʌmtaimz)", "Đôi khi, đôi lúc"),
    new Vocabulary("Occasionally (ə'keiʤnəli)", "Thỉnh thoảng"),
    new Vocabulary("Hardly ever (hɑ:dli)", "Hầu như không bao giờ"),
    new Vocabulary("Rarely (reəli)", "Hiếm khi"),
    new Vocabulary("Never (nevə)", "Không bao giờ"),
    new Vocabulary("every day/ week/ month ...", "Mỗi ngày / tuần / tháng ...")
];

const positions = [
    new Vocabulary("In front of (frʌnt)","Phía trước của cái gì..."),
    new Vocabulary("Behind (bi'haind)","Phía sau của cái gì..."),
    new Vocabulary("Between (bi'twi:n)","Ở giữa 2 vật hoặc thứ gì đó..."),
    new Vocabulary("Opposite","Đối diện"),
    new Vocabulary("Next to / Beside (bi'said)","Kế bên, bên cạnh"),
    new Vocabulary("Near / Close to /(niə)","Gần giữa hai vật hoặc thứ gì đó..."),
    new Vocabulary("On","Trên, trong"),
    new Vocabulary("Above / Over /(ə'bʌv)","Trên, phía trên"),
    new Vocabulary("Under / Below /(bi'lou)","Dưới, phía dưới")
]

const months = [
    new Vocabulary("January (ˈjanyəˌwerē)","Tháng một"),
    new Vocabulary("February (ˈfeb(y)o͞oˌerē)","Tháng hai"),
    new Vocabulary("March (march)","Tháng ba"),
    new Vocabulary("April (ˈāprəl)","Tháng bốn"),
    new Vocabulary("May (may)","Tháng năm"),
    new Vocabulary("June (jo͞on)","Tháng sáu"),
    new Vocabulary("July (jəˈlī)","Tháng bảy"),
    new Vocabulary("August (august)","Tháng tám"),
    new Vocabulary("September (sepˈtembər)","Tháng chín"),
    new Vocabulary("October (äkˈtōbər)","Tháng mười"),
    new Vocabulary("November (nōˈvembər)","Tháng mười một"),
    new Vocabulary("December (dəˈsembər)","Tháng mười hai")
]



const listTypesVocalName = [
    new VocabType("foods", "Foods"),
    new VocabType("frequencies", "Frequencies"),
    new VocabType("positions", "Positions"),
    new VocabType("months","Months")
]

const data = {
    foods: foods,
    frequencies: frequencies,
    positions: positions,
    months: months
}

export { data, listTypesVocalName, positions, months }
