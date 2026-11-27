/* Round 12: Turkish track.
   Data-only file, same shape as ko.js / ja.js: it fills the shared structures the
   other languages use (EXTRA_UNITS / EXTRA_WORDS / LEVEL_UNITS / GRAMMAR / GRAMMAR2 /
   STORIES / ALPHABETS) plus a Turkish-only verb-ending trainer for the present
   continuous (-Iyor) and a Turkish key normaliser so answers typed without
   ç/ş/ğ/ı/ö/ü are still accepted. Turkish uses the Latin alphabet, so there is no
   romanization helper - the Arabic transliteration comes from arpron.js (tr|...). */

EXTRA_UNITS.tr=[
["التسوق","Bu ne kadar?","كم سعر هذا؟","Çok pahalı","إنه غالٍ جداً"],
["المواصلات والاتجاهات","Tren istasyonu nerede?","أين محطة القطار؟","Sağa dönün","اذهب يميناً"],
["الصحة","Başım ağrıyor","رأسي يؤلمني","Hastaneye gitmem gerek","يجب أن أذهب إلى المستشفى"],
["الطقس","Bugün hava sıcak","الجو حار اليوم","Yağmur yağıyor","إنها تمطر"],
["العمل والدراسة","Bir ofiste çalışıyorum","أعمل في مكتب","Üniversitede Türkçe okuyorum","أدرس التركية في الجامعة"],
["الهوايات والسفر","Seyahat etmeyi seviyorum","أحب السفر","Türkçe konuşabiliyor musun?","هل تستطيع التحدث بالتركية؟"]];

EXTRA_WORDS.tr=["su","ekmek","ev","kitap","arkadaş","teşekkürler","lütfen","evet","hayır","iyi","büyük","küçük","bugün","yarın","şehir","sokak","okul","iş","zaman","aşk","gün","gece","yemek","içmek"];

LEVEL_UNITS.tr={
B1:[
["السفر والحجوزات","Çift kişilik oda ayırtmak istiyorum","أريد حجز غرفة مزدوجة","Sonraki tren saat kaçta kalkıyor?","متى يغادر القطار القادم؟"],
["المشاعر والآراء","Bence haklısın","أظن أنك محق","Hizmetten hayal kırıklığına uğradım","أنا محبط من الخدمة"],
["الماضي والذكريات","Çocukken çok oynardım","عندما كنت صغيراً كنت ألعب كثيراً","Dün büyükannemi ziyaret ettim","أمس زرت جدتي"],
["الخطط المستقبلية","Yurt dışında okumaya gideceğim","سأذهب للدراسة في الخارج","Gelecek yaz seyahat etmeyi planlıyorum","أنوي السفر صيف العام القادم"],
["المساومة والتسوق","Biraz indirim yapabilir misiniz?","هل يمكنك أن تعطيني خصماً؟","Anneme hediye arıyorum","أبحث عن هدية لأمي"],
["في المطعم بثقة","Hangi yemeği önerirsiniz?","أي طبق توصي به؟","Deniz ürünlerine alerjim var","لدي حساسية من المأكولات البحرية"]],
B2:[
["مقابلات العمل","Müşteri hizmetlerinde deneyimim var","لدي خبرة في خدمة العملاء","Kendimi sorumluluk sahibi biri olarak görüyorum","أعتبر نفسي شخصاً مسؤولاً"],
["الصحة والمواعيد","Doktordan randevu almak istiyorum","أريد حجز موعد مع الطبيب","Üç gündür ateşim var","عندي حمى منذ ثلاثة أيام"],
["التكنولوجيا","Şifremi unuttum","نسيت كلمة المرور","Dosyayı bana gönderebilir misiniz?","هل يمكنك إرسال الملف لي؟"],
["العمل عن بعد","Evden çalışmayı tercih ediyorum","أفضل العمل من المنزل","Toplantı çevrimiçi yapılacak","الاجتماع سيكون عبر الفيديو"],
["التعليم والدراسة","Burs başvurusu yapmayı düşünüyorum","أنوي التقديم على منحة دراسية","Sınav sonuçları gelecek hafta açıklanacak","نتائج الاختبار ستظهر الأسبوع القادم"],
["العلاقات الاجتماعية","Arkadaşlarımla uzun zaman sonra buluştum","التقيت بأصدقائي بعد غياب طويل","Birbirimizi iyi anlıyoruz","نحن نفهم بعضنا جيداً"]],
C1:[
["النقاش وطرح الرأي","Bence bu karar doğru","من وجهة نظري، إنه قرار صائب","Tamamen aynı fikirde değilim","لست موافقاً معك تماماً"],
["لغة الأعمال","Şirket bu yıl kârını artırdı","زادت الشركة أرباحها هذا العام","Sözleşmeyi gelecek hafta imzalayacağız","سنوقع العقد الأسبوع القادم"],
["الإعلام والمجتمع","Bu konu tüm toplumun dikkatini gerektiriyor","هذه القضية تحتاج تفكير المجتمع كله","Kamuoyu yavaş yavaş değişiyor","الرأي العام يتغير تدريجياً"],
["البيئة والاستدامة","Çevreyi korumak bir seçenek değil, zorunluluktur","حماية البيئة ليست خياراً بل واجب","Geri dönüşümü artırmamız gerekiyor","يجب زيادة إعادة التدوير"],
["الأدب والتعبير","Bu roman insanın yalnızlığını anlatıyor","هذه الرواية تتناول وحدة الإنسان","Bu ifadede derin bir hüzün var","ذلك التعبير يحمل حزناً عميقاً"],
["التفاوض والإقناع","Ortak bir çıkarımız var","لدينا مصلحة مشتركة","Taviz verebileceğimiz noktaları bulalım","لنجد النقاط التي يمكن التنازل فيها"]],
C2:[
["الفروق الدقيقة","Duymak ile dinlemek aynı şey değildir","ليس السماع كالإنصات","Kelimenin çağrışımı anlamı değiştirir","ظل الكلمة يغير المعنى"],
["الخطابة والإقناع","Sizi bu konuyu birlikte düşünmeye davet ediyorum","أدعوكم للتأمل في هذا الموضوع","Veriler iddiamı destekliyor","تدعم البيانات حجتي"],
["اللغة والفكر","Dil, düşüncenin çerçevesini kurar","اللغة تصنع إطار التفكير","Çeviri, başka bir dünyayı taşımaktır","الترجمة نقل لعالم آخر"],
["الثقافة والهوية","Kimlik sabit bir şey değildir","الهوية ليست شيئاً ثابتاً","Gelenek değişimin içinde yaşar","التقاليد تبقى عبر التغير"],
["العلوم والبحث","Bu hipotez henüz doğrulanmadı","هذه الفرضية لم تُثبت بعد","Araştırma sonuçları tutarlı değil","نتائج البحث غير متسقة"],
["الطموح والقيادة","Gerçek lider sorumluluğu paylaşır","القائد الحقيقي يشارك المسؤولية","Vizyonsuz çaba yönünü kaybeder","الجهد بلا رؤية يفقد اتجاهه"]]
};

GRAMMAR.tr=[
["Merhaba و Selam و Nasılsınız؟","التركية تفرّق بين مخاطبة صديق (sen) ومخاطبة شخص أكبر أو غريب (siz). merhaba محايدة وتصلح لكل موقف، وselam غير رسمية بين الأصدقاء. استخدم siz مع المدرّس وكل من لا تعرفه حتى تتعلم الفرق جيداً.",["الموقف","الجملة"],[["مع صديق مقرب","Selam, nasılsın?"],["مع مدرّس أو شخص أكبر","Merhaba, nasılsınız?"],["شكراً رسمية","Teşekkür ederim"],["شكراً بين الأصدقاء","Sağ ol"],["صباح الخير","Günaydın"]],["كيف تحيي مدرسك في أول يوم؟","Merhaba, nasılsınız?","Selam, nasılsın?","Sağ ol"]],
["لا جنس في التركية والجمع -ler / -lar","التركية لا تفرّق بين المذكر والمؤنث: الضمير o يعني «هو» و«هي» معاً. والجمع نضيفه بلاصقة واحدة تتبع التوافق الصوتي: -ler بعد e, i, ö, ü و-lar بعد a, ı, o, u. وبعد الأرقام لا نضيف الجمع: نقول üç kitap لا üç kitaplar.",["المفرد","الجمع"],[["kitap","kitaplar"],["ev","evler"],["gün","günler"],["okul","okullar"],["çocuk","çocuklar"]],["ما جمع كلمة ev؟","evler","evlar","evs"]],
["الأرقام وأيام الأسبوع","الأرقام من واحد إلى عشرة: bir, iki, üç, dört, beş, altı, yedi, sekiz, dokuz, on. وأيام الأسبوع كلها تُكتب بحرف صغير: pazartesi, salı, çarşamba, perşembe, cuma, cumartesi, pazar. لاحظ أن gün تعني «يوم» وتُستخدم في تسمية الأيام.",["العربية","التركية"],[["1 – 3","bir, iki, üç"],["4 – 6","dört, beş, altı"],["7 – 10","yedi, sekiz, dokuz, on"],["الاثنين – الثلاثاء","pazartesi, salı"],["الأربعاء – الخميس","çarşamba, perşembe"]],["ما يوم الاثنين بالتركية؟","pazartesi","salı","pazar"]],
["المضارع المستمر -yor","نضيف -yor إلى جذر الفعل ثم لاصقة الشخص: gel- تصبح geliyorum (أنا آتٍ)، geliyorsun، geliyor، geliyoruz، geliyorsunuz، geliyorlar. وبما أن آخر حرف في -yor هو o فإن لاصقات الشخص تأخذ u دائماً: -um, -sun, -uz, -sunuz, -lar.",["الضمير","الصيغة"],[["ben","geliyorum"],["sen","geliyorsun"],["o","geliyor"],["biz","geliyoruz"],["onlar","geliyorlar"]],["كيف تقول: أنا آتٍ؟","geliyorum","geliyorsun","geliyor"]],
["var و yok للملكية","للتعبير عن الوجود والملكية نستخدم var (يوجد / عندي) ونقيضها yok (لا يوجد / ليس عندي)، دون فعل مساعد. نقول Bir ağabeyim var أي «عندي أخ أكبر»، والنفي Bir ağabeyim yok.",["العربية","التركية"],[["عندي أخ أكبر","Bir ağabeyim var"],["ليس عندي أخ أكبر","Bir ağabeyim yok"],["هل عندك وقت؟","Vaktin var mı?"],["لا يوجد وقت","Vakit yok"]],["كيف تقول: ليس عندي وقت؟","Vaktim yok","Vaktim var","Vakit değil"]],
["حالة المكان -de / -da و -e / -a","-de / -da تعني «في»، و-e / -a تعني «إلى». تتبعان التوافق الصوتي، وتصبحان -te / -ta بعد الحروف الصامتة p, ç, t, k, s, ş, h, f: evde (في البيت)، işte (في العمل)، eve (إلى البيت).",["العربية","التركية"],[["أنا في البيت","Evdeyim"],["أذهب إلى البيت","Eve gidiyorum"],["أنا في العمل","İşteyim"],["أدرس في الجامعة","Üniversitede okuyorum"]],["أكمل: Üniversite___ okuyorum","de","te","e"]],
["المفعول به -i / -ı / -u / -ü","نضيف -i / -ı / -u / -ü إلى الاسم المعرّف الذي يقع مفعولاً به، حسب التوافق الصوتي: kitabı، evi، okulu، gülü. وترتيب الجملة التركية: فاعل + مفعول + فعل.",["العربية","التركية"],[["أقرأ الكتاب","Kitabı okuyorum"],["أشرب الماء","Suyu içiyorum"],["أحب القهوة","Kahveyi seviyorum"],["أشتري الخبز","Ekmeği alıyorum"]],["أكمل: Kitab___ okuyorum","ı","i","u"]],
["الصفات والطقس","الصفة تتقدم الاسم: sıcak hava (جو حار). وللإخبار نستخدم الصفة وحدها بعد الاسم: Hava sıcak (الجو حار)، Hava soğuk (الجو بارد). وللأمطار والثلوج نستخدم yağmur yağıyor وkar yağıyor.",["العربية","التركية"],[["حار","sıcak"],["بارد","soğuk"],["دافئ","ılık"],["تمطر","yağmur yağıyor"],["تثلج","kar yağıyor"]],["كيف تقول: الجو بارد؟","Hava soğuk","Hava sıcak","Hava ılık"]],
["الماضي -dı / -di","للماضي نضيف -dı / -di / -du / -dü ثم لاصقة الشخص: gitmek ← gittim (ذهبت)، gelmek ← geldim (جئت)، okumak ← okudum (قرأت). مع onlar نضيف -ler: gittiler.",["المصدر ← الماضي","المعنى"],[["gitmek → gittim","ذهبت"],["gelmek → geldim","جئت"],["okumak → okudum","قرأت"],["yemek → yedim","أكلت"]],["أكمل: Dün okula ___","gittim","gidiyorum","gideceğim"]],
["المستقبل -ecek / -acak","نضيف -ecek / -acak ثم لاصقة الشخص: gideceğim (سأذهب)، geleceğim (سآتي)، okuyacağım (سأقرأ). لاحظ أن k في اللاصقة تصبح ğ قبل لاصقة تبدأ بحرف علة.",["المصدر ← المستقبل","المعنى"],[["gitmek → gideceğim","سأذهب"],["gelmek → geleceğim","سآتي"],["okumak → okuyacağım","سأقرأ"],["yapmak → yapacağım","سأفعل"]],["كيف تقول: سأذهب؟","gideceğim","gidiyorum","gittim"]],
["النفي -me / -ma و değil","نفي الفعل يكون بإضافة -me / -ma قبل الزمن: gelmiyorum (لا آتي)، gitmedim (لم أذهب)، gitmeyeceğim (لن أذهب). ونفي الاسم أو الصفة يكون بكلمة değil: Öğrenci değilim (لست طالباً).",["العربية","التركية"],[["لا آتي","gelmiyorum"],["لم أذهب","gitmedim"],["لن أذهب","gitmeyeceğim"],["لست طالباً","Öğrenci değilim"]],["كيف تقول: لا آتي؟","gelmiyorum","geliyorum","gelmedim"]],
["السؤال بأداة mi","أداة السؤال mi تأتي منفصلة بعد الجملة، وتتبع التوافق الصوتي (mı / mi / mu / mü) وتأخذ لاصقة الشخص: Geliyor musun? (هل تأتي؟)، Öğrenci misin? (هل أنت طالب؟)، Vaktin var mı? (هل عندك وقت؟).",["العربية","التركية"],[["هل تأتي؟","Geliyor musun?"],["هل أنت طالب؟","Öğrenci misin?"],["هل عندك وقت؟","Vaktin var mı?"],["هل هذا كتاب؟","Bu bir kitap mı?"]],["أكمل: Geliyor ___?","musun","misin","mı"]]];

GRAMMAR2.tr={
B1:[
["-dığı için (السبب)","نضيف -dığı / -diği + iyelik + için للتعبير عن السبب: Yağmur yağdığı için evde kaldım أي «لأنها أمطرت بقيت في البيت». صيغة أكثر رسمية من -dığından.",["العربية","التركية"],[["لأن الجو بارد لم أخرج","Hava soğuk olduğu için çıkmadım"],["لأنني مشغول لا أستطيع المجيء","Meşgul olduğum için gelemem"],["لأنني تعبت استرحت","Yorulduğum için dinlendim"]],["أكمل: Yağmur yağ___ evde kaldım","dığı için","ıyor","acak"]],
["-mek / -mak istiyorum (الرغبة)","بعد مصدر الفعل المنتهي بـ -mek / -mak نضيف istiyorum للتعبير عن الرغبة: Türkçe öğrenmek istiyorum (أريد أن أتعلم التركية). والنفي: istemiyorum.",["العربية","التركية"],[["أريد أن أتعلم التركية","Türkçe öğrenmek istiyorum"],["أريد أن أذهب","Gitmek istiyorum"],["لا أريد أن أعمل","Çalışmak istemiyorum"]],["كيف تقول: أريد أن أنام؟","Uyumak istiyorum","Uyuyorum","Uyudum"]],
["-abilir / -ebilir (القدرة والاستئذان)","نضيف -abil / -ebil ثم لاصقة الزمن: Okuyabilirim (أستطيع القراءة). وللاستئذان نضيف أداة السؤال: Girebilir miyim? (هل يمكنني الدخول؟). النفي يكون بصيغة -emem / -amam.",["العربية","التركية"],[["أستطيع القراءة","Okuyabilirim"],["هل يمكنني الدخول؟","Girebilir miyim?"],["لا أستطيع المجيء","Gelemem"]],["كيف تقول: أستطيع القراءة؟","Okuyabilirim","Okuyorum","Okuyacağım"]],
["-sa / -se (الشرط)","الشرط البسيط يُبنى بإضافة -sa / -se إلى جذر الفعل أو الاسم: Hava güzel olsa yürürüz (لو كان الجو جميلاً لتمشينا). ويُستخدم كثيراً مع الماضي -dı للتمني: keşke vaktim olsaydı.",["العربية","التركية"],[["لو كان عندي وقت لسافرت","Vaktim olsa seyahat ederdim"],["لو درست ستنجح","Çalışsan kazanırsın"],["لو جاء أخبرني","Gelirse haber ver"]],["أكمل: Vaktim ___ seyahat ederdim","olsa","var","oldu"]],
["-ken (بينما / عندما)","نضيف -ken إلى الجذر أو إلى الصيغة الماضية للتعبير عن التزامن: Çocukken (عندما كنت طفلاً)، Ben okurken (بينما أقرأ)، O uyurken (بينما هو نائم). اللاصقة لا تتغير مع الشخص.",["العربية","التركية"],[["عندما كنت طفلاً","Çocukken"],["بينما أقرأ","Ben okurken"],["بينما هو نائم","O uyurken"]],["كيف تقول: عندما كنت طفلاً؟","Çocukken","Çocuk","Çocuklar"]],
["-dan önce / -dan sonra (قبل / بعد)","نضيف -dan / -den + önce أو sonra: yemekten önce (قبل الطعام)، işten sonra (بعد العمل). مع المصدر نستخدم -madan önce للقبل و-dıktan sonra للبعد.",["العربية","التركية"],[["قبل النوم","Uyumadan önce"],["بعد العمل","İşten sonra"],["قبل الطعام","Yemekten önce"]],["كيف تقول: بعد العمل؟","İşten sonra","İşten önce","İşte"]]],
B2:[
["-mış (النقل والاستنتاج)","صيغة -mış تُستخدم لما سمعناه أو استنتجناه دون أن نراه: Yağmur yağmış (يبدو أنها أمطرت)، Hastalanmışsın (سمعت أنك مرضت). وهي أيضاً صيغة الحكايات.",["العربية","التركية"],[["يقال إنه جاء","Gelmiş"],["يبدو أنه نائم","Uyumuş"],["سمعت أنك مرضت","Hastalanmışsın"]],["أكمل: Duyduğuma göre gel___","miş","di","ecek"]],
["المبني للمجهول -ıl / -il","نضيف -ıl / -il / -ul / -ül إلى جذر الفعل: yazıldı (كُتب)، yapıldı (صُنع)، açıldı (فُتح). ونذكر الفاعل بـ tarafından عند الحاجة.",["العربية","التركية"],[["كُتب الكتاب","Kitap yazıldı"],["بُني البيت","Ev yapıldı"],["فُتح الباب","Kapı açıldı"]],["كيف تقول: فُتح الباب؟","Kapı açıldı","Kapı açtı","Kapı açıyor"]],
["-dıkça (كلما)","نضيف -dıkça / -dikçe للتعبير عن التدرج: Okudukça daha çok öğreniyorum (كلما قرأت تعلمت أكثر)، Konuştukça gelişiyorum (كلما تحدثت تحسنت).",["العربية","التركية"],[["كلما قرأت تعلمت أكثر","Okudukça daha çok öğreniyorum"],["كلما تحدثت تحسنت","Konuştukça gelişiyorum"]],["أكمل: Oku___ daha çok öğreniyorum","dukça","yorum","dum"]],
["-mek zorunda (الاضطرار)","للتعبير عن الإلزام الخارجي نستخدم -mek / -mak zorunda: Çalışmak zorundayım (يجب أن أعمل)، Beklemek zorundasın (عليك أن تنتظر). وللنصيحة نستخدم -malı / -meli.",["العربية","التركية"],[["يجب أن أعمل","Çalışmak zorundayım"],["عليك أن تنتظر","Beklemek zorundasın"]],["كيف تقول: يجب أن أعمل؟","Çalışmak zorundayım","Çalışıyorum","Çalışmalıyım"]],
["-e rağmen (رغم)","نضيف -e / -a + rağmen للاستدراك: Yağmura rağmen çıktık (رغم المطر خرجنا). صيغة مرادفة أكثر رسمية: -dığı halde.",["العربية","التركية"],[["رغم المطر خرجنا","Yağmura rağmen çıktık"],["رغم التعب أكملت","Yorgunluğa rağmen bitirdim"]],["أكمل: Yağmur___ rağmen çıktık","a","ı","dan"]],
["-ip (العطف المتسلسل)","نضيف -ip / -ıp / -up / -üp لربط فعلين متتاليين: Gidip geldim (ذهبت وعدت)، Yiyip içtim (أكلت وشربت). اللاصقة لا تحمل زمناً، فالزمن يأتي في الفعل الأخير.",["العربية","التركية"],[["ذهبت وعدت","Gidip geldim"],["أكلت وشربت","Yiyip içtim"]],["أكمل: Gid___ geldim","ip","dim","iyorum"]]],
C1:[
["-mış olsaydı (الشرط الماضي)","للندم على ما لم يحدث: Çalışmış olsaydın kazanırdın (لو درست لنجحت)، Bilmiş olsaydım söylerdim (لو عرفت لقلت). تُستخدم في التحليل والتقييم الرسمي.",["العربية","التركية"],[["لو درست لنجحت","Çalışmış olsaydın kazanırdın"],["لو عرفت لقلت","Bilmiş olsaydım söylerdim"]],["أكمل: Bil___ söylerdim","miş olsaydım","iyorum","dim"]],
["-den dolayı (بسبب)","صيغة سبب رسمية: hastalığından dolayı (بسبب مرضه)، hava yüzünden (بسبب الطقس). أكثر تكلفاً من -dığı için وتناسب النصوص الرسمية.",["العربية","التركية"],[["بسبب الطقس تأخرنا","Hava yüzünden geciktik"],["بسبب مرضه لم يأت","Hastalığından dolayı gelmedi"]],["أكمل: Hastalığın___ dolayı gelmedi","dan","a","ı"]],
["المصدر -mek / -mak كاسم","مصدر الفعل يعمل كاسم مفرد: Yüzmek faydalıdır (السباحة مفيدة)، Okumak iyi bir alışkanlıktır (القراءة عادة جيدة). ويمكن أن يأخذ حالة الجر: yüzmeyi seviyorum.",["العربية","التركية"],[["السباحة مفيدة","Yüzmek faydalıdır"],["القراءة عادة جيدة","Okumak iyi bir alışkanlıktır"]],["كيف تقول: السباحة مفيدة؟","Yüzmek faydalıdır","Yüzüyorum","Yüzdüm"]],
["-ınca / -ince (عندما فوراً)","تعني «بمجرد أن» أو «عندما»: Varınca seni aradım (عندما وصلت اتصلت بك)، Görünce hatırladım (عندما رأيته تذكرت).",["العربية","التركية"],[["عندما وصلت اتصلت بك","Varınca seni aradım"],["عندما رأيته تذكرت","Görünce hatırladım"]],["أكمل: Var___ seni aradım","ınca","dım","ıyorum"]],
["-madan (بدون أن)","نضيف -madan / -meden للدلالة على عدم حدوث الفعل الأول: Uyumadan gittim (ذهبت بدون أن أنام)، Sormadan çıktı (خرج بدون أن يسأل).",["العربية","التركية"],[["ذهبت بدون أن أنام","Uyumadan gittim"],["خرج بدون أن يسأل","Sormadan çıktı"]],["أكمل: Sor___ çıktı","madan","du","uyor"]],
["-mak yerine (بدلاً من)","نضيف -mek / -mak + yerine: Şikayet etmek yerine çalış (بدلاً من الشكوى اعمل)، Oturmak yerine çık (بدلاً من الجلوس اخرج).",["العربية","التركية"],[["بدلاً من الشكوى اعمل","Şikayet etmek yerine çalış"],["بدلاً من الجلوس اخرج","Oturmak yerine çık"]],["أكمل: Otur___ yerine çık","mak","dum","uyor"]]],
C2:[
["-seydi / -saydı (التمني والندم)","صيغة تمنٍّ ماضية: Daha erken başlasaydım (لو أنني بدأت أبكر)، Keşke gelseydi (ليته جاء). تُستخدم في الخطاب التأملي والنقدي.",["العربية","التركية"],[["لو أنني بدأت أبكر","Daha erken başlasaydım"],["ليته جاء","Keşke gelseydi"]],["أكمل: Erken başla___","saydım","dım","yorum"]],
["-mişçesine (كما لو)","نضيف -mış / -miş + çesine للتشبيه البلاغي: Biliyormuşçasına konuştu (تحدث كما لو أنه يعرف)، Duymamışçasına devam etti (تابع كما لو أنه لم يسمع).",["العربية","التركية"],[["تحدث كما لو أنه يعرف","Biliyormuşçasına konuştu"],["تابع كما لو أنه لم يسمع","Duymamışçasına devam etti"]],["أكمل: Bil___ konuştu","iyormuşçasına","iyor","di"]],
["الترتيب البلاغي (devrik cümle)","التركية تسمح بتقديم الخبر أو الفعل على الفاعل لأغراض بلاغية: Geldi sonunda bahar بدل Bahar sonunda geldi. هذا الأسلوب شائع في الشعر والإعلان والخطابة.",["الجملة","الأسلوب"],[["جاء الربيع أخيراً","Geldi sonunda bahar"],["جميلٌ هذا العالم","Güzel bu dünya"]],["أي جملة تستخدم التقديم البلاغي؟","Geldi sonunda bahar","Bahar sonunda geldi","Sonunda bahar geldi"]],
["-dığı sürece (طالما)","نضيف -dığı / -diği + sürece: Yanımda olduğun sürece (طالما أنت معي)، Umut olduğu sürece (طالما يوجد أمل). تفيد الشرط المستمر.",["العربية","التركية"],[["طالما أنت معي","Yanımda olduğun sürece"],["طالما يوجد أمل","Umut olduğu sürece"]],["أكمل: Umut olduğu ___","sürece","için","zaman"]],
["-mekle birlikte (مع أن)","صيغة استدراك رسمية: Zeki olmakla birlikte dikkatsiz (مع أنه ذكي إلا أنه مهمل)، Pahalı olmakla birlikte iyi (مع أنه غالٍ إلا أنه جيد).",["العربية","التركية"],[["مع أنه ذكي إلا أنه مهمل","Zeki olmakla birlikte dikkatsiz"],["مع أنه غالٍ إلا أنه جيد","Pahalı olmakla birlikte iyi"]],["أكمل: Pahalı ol___ birlikte iyi","makla","du","uyor"]],
["الأسماء المصدرية -iş / -im","بعض المصادر تُصاغ بـ -iş / -ış / -uş أو -im / -ım: okuyuş (القراءة)، anlayış (الفهم)، başlangıç (البداية). هذه الصيغ تسمّي الحدث نفسه وتُستخدم كثيراً في العناوين والمصطلحات.",["المصدر","الاسم"],[["okumak","okuyuş"],["anlamak","anlayış"],["başlamak","başlangıç"]],["ما الاسم المصدري من anlamak؟","anlayış","anlam","anlıyor"]]]
};

STORIES.tr=[
{level:"A1",title:"يومي",s:[["Benim adım Ali.","أنا علي."],["Yirmi yaşındayım.","عمري عشرون سنة."],["Kahire'de yaşıyorum.","أعيش في القاهرة."],["Kahveyi severim.","أحب القهوة."],["Her gün Türkçe çalışıyorum.","أدرس التركية كل يوم."]]},
{level:"A2",title:"رحلة إلى إسطنبول",s:[["Geçen yıl İstanbul'a gittim.","سافرت إلى إسطنبول العام الماضي."],["Ayasofya'yı gezdim.","زرت آيا صوفيا."],["Arkadaşlarımla kebap yedim.","أكلت الكباب مع أصدقائي."],["Hava çok güzeldi.","كان الطقس جميلاً جداً."],["Gelecek yıl yine gitmek istiyorum.","أريد العودة العام القادم."]]},
{level:"B1",title:"قرار مهم",s:[["Çocukken doktor olmak istiyordum.","عندما كنت صغيراً أردت أن أصبح طبيباً."],["Ama dillere ilgi duyduğumu fark ettim.","لكنني اكتشفت شغفي باللغات."],["Üniversitede çeviribilim okumaya karar verdim.","قررت دراسة الترجمة في الجامعة."],["Yol zordu ama pes etmedim.","رغم أن الطريق كان صعباً لم أستسلم."],["Şimdi dört dil konuşabiliyorum.","الآن أستطيع التحدث بأربع لغات."]]},
{level:"B2",title:"في مدينة جديدة",s:[["İstanbul'a ilk geldiğimde hiçbir şey bilmiyordum.","عندما وصلت إلى إسطنبول أول مرة لم أكن أعرف شيئاً."],["Metro hatlarını öğrenmem bir ay sürdü.","استغرقت شهراً لأحفظ خطوط المترو."],["Çok hata yaptım ama insanlar çok yardımcı oldu.","أخطأت كثيراً لكن الناس كانوا لطفاء."],["Şimdi yolumu kolayca buluyorum.","الآن أجد طريقي بسهولة."],["Yeni bir şehir cesaret ister.","المدينة الجديدة تحتاج إلى شجاعة."]]},
{level:"C1",title:"التقنية وحياتنا",s:[["Teknoloji günlük hayatımızı hızla değiştiriyor.","التقنية تغيّر حياتنا اليومية بسرعة."],["Kolaylığın arkasında yeni sorumluluklar da var.","خلف الراحة تأتي مسؤوليات جديدة."],["Bilgiyi nasıl tükettiğimizi gözden geçirmeliyiz.","علينا أن نراجع طريقة استهلاكنا للمعلومات."],["Dengeyi kaybedersek muhakememiz de zayıflar.","إذا فقدنا التوازن ضعف حكمنا أيضاً."],["Sonunda seçim bizim.","في النهاية الخيار لنا."]]},
{level:"C2",title:"العالم الذي تصنعه اللغة",s:[["Dil yalnızca bir araç değil, dünyayı anlama biçimidir.","اللغة ليست أداة بسيطة بل طريقة لفهم العالم."],["Aynı olay, ifadeye göre farklı anlam kazanır.","الحدث نفسه يأخذ معنى مختلفاً حسب التعبير."],["Çevirmen iki dünya arasında köprü kuran kişidir.","المترجم من يبني جسراً بين عالمين."],["Bu yüzden çeviri yaratıcılığa yakındır.","لذلك الترجمة أقرب إلى الإبداع."],["Kullandığımız sözler gördüğümüz dünyayı kurar.","الكلمات التي نستخدمها تصنع العالم الذي نراه."]]}
];

/* Pronunciation page: the 29 letters, the six special letters, vowel harmony and common words.
   Same card shape as the other Latin-alphabet languages: [upper, lower, arabic name, speak text, example, meaning]. */
ALPHABETS.tr={
notes:"التركية تُكتب بالأبجدية اللاتينية بعد إصلاح الحروف عام 1928: 29 حرفاً، ولا تستخدم q وw وx. الحروف الستة ç, ğ, ı, ö, ş, ü هي مفتاح النطق الصحيح، ثم قانون التوافق الصوتي (ünlü uyumu) الذي يجعل كل لاصقة تتبع حركة المقطع الأخير. تعلّم الأصوات أولاً ثم اقرأ كل كلمة جديدة بصوت مرتفع.",
letters:[
["A","a","آ","a","araba","سيارة"],
["B","b","بِه","be","bal","عسل"],
["C","c","جِه","ce","cam","زجاج"],
["Ç","ç","تشِه","çe","çay","شاي"],
["D","d","دِه","de","deniz","بحر"],
["E","e","إِه","e","ekmek","خبز"],
["F","f","فِه","fe","fil","فيل"],
["G","g","غِه","ge","gül","وردة"],
["Ğ","ğ","يُومُوشاق غِه","yumuşak ge","dağ","جبل"],
["H","h","هِه","he","hava","هواء"],
["I","ı","إِ (بلا نقطة)","ı","ışık","ضوء"],
["İ","i","إي","i","iyi","جيد"],
["J","j","ژِه","je","jip","جيب"],
["K","k","كِه","ke","kitap","كتاب"],
["L","l","لِه","le","limon","ليمون"],
["M","m","مِه","me","masa","طاولة"],
["N","n","نِه","ne","nar","رمان"],
["O","o","أُو","o","okul","مدرسة"],
["Ö","ö","أُو مدوّرة","ö","öğretmen","مدرّس"],
["P","p","پِه","pe","para","مال"],
["R","r","رِه","re","resim","صورة"],
["S","s","سِه","se","su","ماء"],
["Ş","ş","شِه","şe","şehir","مدينة"],
["T","t","تِه","te","tren","قطار"],
["U","u","أُو ثقيلة","u","uçak","طائرة"],
["Ü","ü","أُو مضمومة","ü","üzüm","عنب"],
["V","v","ڤِه","ve","var","يوجد"],
["Y","y","يِه","ye","yol","طريق"],
["Z","z","زِه","ze","zeytin","زيتون"]],
extra:[
["الحروف الخاصة الستة","أصوات لا توجد في العربية وتحتاج تدريباً",[["ç","çay","«تش»","مثل ch الإنجليزية: çay = شاي"],["ğ","dağ","إطالة للحركة قبلها","لا تُنطق وحدها، تُطيل الحركة: dağ = جبل"],["ı","ışık","«إ» ثقيلة بلا نقطة","بين الفتحة والكسرة، ولا تقابلها في العربية: ışık = ضوء"],["ö","öğretmen","«أُو» مدوّرة","مثل eu في الفرنسية: öğretmen = مدرّس"],["ş","şehir","«ش»","مثل sh الإنجليزية: şehir = مدينة"],["ü","üzüm","«أُو» مضمومة","مثل ü الألمانية: üzüm = عنب"]]],
["قانون التوافق الصوتي (Ünlü Uyumu)","كل لاصقة تتبع حركة المقطع الأخير في الكلمة",[["-lar","kitaplar","الجمع بعد a, ı, o, u","kitap + lar = kitaplar (كتب)"],["-ler","günler","الجمع بعد e, i, ö, ü","gün + ler = günler (أيام)"],["-da","evde","«في» بعد الحروف الصحيحة","ev + de = evde (في البيت)"],["-e","eve","«إلى» بعد الحروف الصحيحة","ev + e = eve (إلى البيت)"],["-ı","kitabı","المفعول به بعد a, ı","kitap + ı = kitabı (الكتاب)"],["-mi","geliyor mu?","أداة السؤال تتبع الحركة","geliyor + mu = geliyor mu? (هل يأتي؟)"]]]
],
words:[
["merhaba","مرحبا","مرحباً"],
["teşekkürler","تِشكُّورلِر","شكراً"],
["evet","إڤِت","نعم"],
["hayır","خايِر","لا"],
["su","سو","ماء"],
["ekmek","إكمِك","خبز"],
["aşk","عشق","حب"],
["arkadaş","أركاداش","صديق"],
["okul","أوكول","مدرسة"],
["Türkiye","تُوركيِه","تركيا"]]};
const TR_VERBS=[
["yapmak","يفعل","yapıyor","yapmıyor"],
["gelmek","يأتي","geliyor","gelmiyor"],
["gitmek","يذهب","gidiyor","gitmiyor"],
["okumak","يقرأ","okuyor","okumuyor"],
["yazmak","يكتب","yazıyor","yazmıyor"],
["yemek","يأكل","yiyor","yemiyor"],
["içmek","يشرب","içiyor","içmiyor"],
["çalışmak","يعمل","çalışıyor","çalışmıyor"],
["konuşmak","يتحدث","konuşuyor","konuşmuyor"],
["beklemek","ينتظر","bekliyor","beklemiyor"],
["sevmek","يحب","seviyor","sevmiyor"],
["öğrenmek","يتعلم","öğreniyor","öğrenmiyor"]];

/* ---- Turkish verb trainer: present continuous -Iyor, vowel harmony,
   positive / negative / question. The -yor ending always carries o, so the
   person endings after it are always -um, -sun, -, -uz, -sunuz, -lar. ---- */
const TR_PERSONS=[["ben","أنا"],["sen","أنت"],["o","هو / هي"],["biz","نحن"],["siz","أنتم"],["onlar","هم"]];
const TR_FORMS=[["إثبات","الفعل + -yor + لاصقة الشخص"],["نفي","جذر + -mıyor / -miyor + لاصقة الشخص"],["سؤال","صيغة الإثبات + أداة mi مع لاصقة الشخص"]];
const TR_PERSON_END=["um","sun","","uz","sunuz","lar"];
const TR_Q_END=["muyum","musun","mu","muyuz","musunuz","mı"];
function trConj(v,p,f){let base=f===1?v[3]:v[2],pos=base+TR_PERSON_END[p];if(f===2)return pos+" "+TR_Q_END[p]+"?";return pos}
function trKey(t){return (t||"").toLocaleLowerCase("tr").replace(/ı/g,"i").replace(/ş/g,"s").replace(/ç/g,"c").replace(/ğ/g,"g").replace(/ö/g,"o").replace(/ü/g,"u").replace(/[^a-z0-9\s]/g," ").replace(/\s+/g," ").trim()}
function trEq(a,b){return trKey(a)===trKey(b)}
let trV=null;
function trVerbTable(v){let h='<div class="tbl-wrap"><table class="md-table"><tr><th>الضمير</th><th>إثبات</th><th>نفي</th><th>سؤال</th></tr>';TR_PERSONS.forEach((ps,p)=>{h+=`<tr><td>${ps[0]} · ${ps[1]}</td><td dir="ltr">${trConj(v,p,0)}</td><td dir="ltr">${trConj(v,p,1)}</td><td dir="ltr">${trConj(v,p,2)}</td></tr>`});return h+"</table></div>"}
function trVerbHome(){let l=LANGS.find(x=>x.id===lang);$("#prac").innerHTML=`<div class="quiz-box"><div class="empty"><div style="font-size:36px">🇹🇷</div><b>مدرب صيغ الأفعال التركية · ${l.name}</b><p class="subtext" style="margin:10px 0">المضارع المستمر -Iyor: نعطيك الفعل والضمير والمطلوب (إثبات أو نفي أو سؤال) وتكتب الصيغة الصحيحة. كل اللواصق تتبع قانون التوافق الصوتي (ünlü uyumu)، والتصحيح يقبل الكتابة بدون ç/ş/ğ/ı/ö/ü.</p><p class="subtext">صيغك الصحيحة حتى الآن: ${db.verbCorrect||0}</p><button class="btn" onclick="startTrVerbs()">ابدأ التمرين · 6 أسئلة</button></div></div>`}
function startTrVerbs(){trV={pick:sh(TR_VERBS).slice(0,6).map(v=>({v,p:Math.floor(Math.random()*6),f:Math.floor(Math.random()*3)})),i:0,score:0};showTrVerb()}
function showTrVerb(){if(!trV)return;if(trV.i>=trV.pick.length){$("#prac").innerHTML=`<div class="quiz-box"><div class="empty"><div style="font-size:40px">${trV.score===trV.pick.length?"🏆":"🎉"}</div><h2>انتهى التمرين!</h2><p>نتيجتك: ${trV.score} من ${trV.pick.length}</p><div class="center-actions"><button class="btn" onclick="startTrVerbs()">إعادة التمرين</button><button class="btn ghost" onclick="practicePage()">← التدريب</button></div></div></div>`;return}
let it=trV.pick[trV.i],fm=TR_FORMS[it.f],ps=TR_PERSONS[it.p];
$("#prac").innerHTML=`<div class="quiz-box"><div class="card-foot"><span>السؤال ${trV.i+1} من ${trV.pick.length}</span><span>⭐ ${db.points} نقطة</span></div><div class="track"><span style="width:${trV.i/trV.pick.length*100}%"></span></div><div class="question" style="font-size:16px">اكتب صيغة الفعل المطلوبة في المضارع المستمر:</div><div class="foreign" dir="ltr" style="text-align:center;font-size:24px">${it.v[0]} <button class="icon-btn sm" onclick="speak('${it.v[0]}','tr')">🔊</button></div><div class="py" style="text-align:center">${it.v[1]} · ${ps[0]} (${ps[1]})</div><div class="note" style="margin:12px 0;text-align:center"><b>${fm[0]}</b><br><small dir="ltr">${fm[1]}</small></div><div class="chat-input" style="margin-top:6px"><input id="trVIn" class="field" dir="auto" placeholder="اكتب الصيغة التركية..." autocomplete="off" onkeydown="if(event.key==='Enter')checkTrVerb()"><button class="btn" onclick="checkTrVerb()">تحقق</button></div><div class="feedback" id="trVFb"></div><div class="center-actions"><button class="tab" onclick="toggleTrTable()">📋 جدول الصيغ</button></div><div id="trVTbl" style="display:none;margin-top:12px">${trVerbTable(it.v)}</div></div>`;
setTimeout(()=>{let e=$("#trVIn");if(e)e.focus()},60)}
function toggleTrTable(){let t=$("#trVTbl");if(t)t.style.display=t.style.display==="none"?"block":"none"}
function checkTrVerb(){let it=trV.pick[trV.i],inp=$("#trVIn"),fb=$("#trVFb");if(!inp||inp.disabled)return;let ans=trConj(it.v,it.p,it.f),ok=trEq(inp.value,ans);inp.disabled=true;
if(ok){trV.score++;db.verbCorrect=(db.verbCorrect||0)+1;db.points+=10;fb.innerHTML="صيغة صحيحة! +10 نقاط ✅"}
else{fb.innerHTML='الصحيح: <b dir="ltr">'+ans+'</b>'}
save();fb.insertAdjacentHTML("beforeend",` <button class="btn" onclick="trV.i++;showTrVerb()">${trV.i+1>=trV.pick.length?"النتيجة":"التالي ←"}</button>`)}
