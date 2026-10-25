/* Shared by every page: languages, My picks (saved on this device), status labels, share. */
(function(){
"use strict";
var LANGS=[["en","English"],["es","Español"],["fr","Français"],["de","Deutsch"],["zh","中文"]];
var S={};
S.en={nav_all:"All art",nav_map:"Map",nav_picks:"My picks",shop:"Visit the gift shop",
demo:"Demo page. Prices and details are made-up samples to show the layout.",sku:"SKU",f_building:"Building",f_location:"Location",f_size:"Size",f_medium:"Medium",
buy:"Buy online",ask_buy:"Ask at the gift shop\nto buy this piece",st_available:"Available",st_sold:"Sold",st_hold:"On hold",st_notforsale:"Not for sale",
note_sold:"This piece has been sold.",note_hold:"On hold.\nAsk at the gift shop.",note_nfs:"This piece is\nnot for sale.",
see_wall:"See everything on {wall}",find_map:"Find it on the building map",on_wall:"On this wall ({n})",
no_photo:"Photo coming soon",photo_n:"Photo {i} of {n}",photos_label:"Photos of this piece. Swipe left or right.",prev_photo:"Previous photo",next_photo:"Next photo",
share:"Share",copied:"Link copied",copy_manual:"Copy this link",
pick_save:"Save to My picks",pick_saved:"Saved to My picks",pick_add:"Save {sku} to My picks",pick_rem:"Remove {sku} from My picks",
foot_piece:"Tell the gift shop the SKU above and they can find this piece.",
no_piece:"No piece found for SKU {sku}. Ask at the gift shop.",load_fail:"Could not load this. Try again, or ask at the gift shop.",other_pieces:"Other pieces",
home_title:"All art",pieces_one:"{n} piece",pieces_other:"{n} pieces",of_total:"{n} of {m}",search_ph:"Search by SKU, title or place",search_aria:"Search the art",chip_all:"All",hide_sold:"Hide sold pieces",nothing:"Nothing matches. Try a different search or wall.",find_art_map:"Find art on the building map",filter_aria:"Filter by wall",
wall_title:"Art wall",wall_pieces_one:"{n} piece on this wall",wall_pieces_other:"{n} pieces on this wall",wall_none:"No art on this wall yet.",wall_nowall:"No wall found for this code. Ask at the gift shop.",wall_noscan:"Scan the QR code on a wall sign to see the art on that wall.",wall_cap:"This wall is outlined on the map. Tap the map to open it full size.",wall_find_map:"Find this wall on the building map",wall_foot:"Tap a piece to see its photos, size and price. Demo page with made-up details.",map_frame:"Map of the building with this wall highlighted",
map_hint_t:"Tap a wall to see its art. Pinch or use + and − to zoom, and drag to move around.",map_hint_m:"Click a wall to see its art. Scroll or use + and − to zoom, and drag to move around.",zoom_t:"Pinch or use the buttons to zoom",zoom_m:"Scroll or use the buttons to zoom",zin:"Zoom in",zout:"Zoom out",fit:"Fit",other_b:"Other buildings",soon:"Coming soon",leg_art:"Wall with art",leg_none:"No art yet",leg_door:"Door",
map_foot:"Demo floor plan with made-up layout and details. The real map would be drawn from the actual building.",main_ent:"Main entrance",rollup:"Roll-up door",back_door:"Back door",rest_door:"Restroom door",stairs:"Stairs",open_floor:"Open floor",map_aria:"Floor plan of Building B. Each wall links to its art.",map_title:"Building {b}",bld_n:"Building {b}",map_fail:"Could not load the walls. Try again, or ask at the gift shop.",
picks_title:"My picks",picks_empty:"You haven't saved any pieces yet. Tap the heart on a piece to save it here.",picks_n_one:"{n} saved piece",picks_n_other:"{n} saved pieces",picks_share:"Share my list",picks_clear:"Clear all",picks_clear2:"Tap again to clear",picks_remove:"Remove",picks_note:"Saved on this phone only. Show this list at the gift shop.",picks_shared:"Someone shared this list with you.",picks_saveall:"Save all to My picks",picks_saved_all:"Saved",picks_share_title:"My picks at Atomic Motors Art",lang_aria:"Language"};
S.es={nav_all:"Todo el arte",nav_map:"Mapa",nav_picks:"Mis favoritos",shop:"Visitar la tienda de regalos",
demo:"Página de demostración. Los precios y detalles son ejemplos inventados para mostrar el diseño.",sku:"SKU",f_building:"Edificio",f_location:"Ubicación",f_size:"Tamaño",f_medium:"Técnica",
buy:"Comprar en línea",ask_buy:"Pregunte en la tienda de regalos\npara comprar esta pieza",st_available:"Disponible",st_sold:"Vendido",st_hold:"Reservado",st_notforsale:"No está a la venta",
note_sold:"Esta pieza ya se vendió.",note_hold:"Reservada.\nPregunte en la tienda de regalos.",note_nfs:"Esta pieza\nno está a la venta.",
see_wall:"Ver todo en {wall}",find_map:"Encuéntrala en el mapa del edificio",on_wall:"En esta pared ({n})",
no_photo:"Foto próximamente",photo_n:"Foto {i} de {n}",photos_label:"Fotos de esta pieza. Deslice a la izquierda o a la derecha.",prev_photo:"Foto anterior",next_photo:"Foto siguiente",
share:"Compartir",copied:"Enlace copiado",copy_manual:"Copie este enlace",
pick_save:"Guardar en Mis favoritos",pick_saved:"Guardado en Mis favoritos",pick_add:"Guardar {sku} en Mis favoritos",pick_rem:"Quitar {sku} de Mis favoritos",
foot_piece:"Dígale a la tienda de regalos el SKU de arriba y podrán encontrar esta pieza.",
no_piece:"No se encontró ninguna pieza con el SKU {sku}. Pregunte en la tienda de regalos.",load_fail:"No se pudo cargar. Inténtelo de nuevo o pregunte en la tienda de regalos.",other_pieces:"Otras piezas",
home_title:"Todo el arte",pieces_one:"{n} pieza",pieces_other:"{n} piezas",of_total:"{n} de {m}",search_ph:"Buscar por SKU, título o lugar",search_aria:"Buscar arte",chip_all:"Todo",hide_sold:"Ocultar piezas vendidas",nothing:"No hay resultados. Pruebe otra búsqueda u otra pared.",find_art_map:"Encontrar arte en el mapa del edificio",filter_aria:"Filtrar por pared",
wall_title:"Pared de arte",wall_pieces_one:"{n} pieza en esta pared",wall_pieces_other:"{n} piezas en esta pared",wall_none:"Todavía no hay arte en esta pared.",wall_nowall:"No se encontró ninguna pared con este código. Pregunte en la tienda de regalos.",wall_noscan:"Escanee el código QR de un letrero de pared para ver el arte de esa pared.",wall_cap:"Esta pared está resaltada en el mapa. Toque el mapa para abrirlo en tamaño completo.",wall_find_map:"Encontrar esta pared en el mapa del edificio",wall_foot:"Toque una pieza para ver sus fotos, tamaño y precio. Página de demostración con detalles inventados.",map_frame:"Mapa del edificio con esta pared resaltada",
map_hint_t:"Toque una pared para ver su arte. Pellizque o use + y − para acercar, y arrastre para moverse.",map_hint_m:"Haga clic en una pared para ver su arte. Use la rueda o + y − para acercar, y arrastre para moverse.",zoom_t:"Pellizque o use los botones para acercar",zoom_m:"Use la rueda o los botones para acercar",zin:"Acercar",zout:"Alejar",fit:"Ajustar",other_b:"Otros edificios",soon:"Próximamente",leg_art:"Pared con arte",leg_none:"Aún sin arte",leg_door:"Puerta",
map_foot:"Plano de demostración con distribución y detalles inventados. El mapa real se dibujaría a partir del edificio.",main_ent:"Entrada principal",rollup:"Puerta enrollable",back_door:"Puerta trasera",rest_door:"Puerta del baño",stairs:"Escaleras",open_floor:"Área abierta",map_aria:"Plano del Edificio B. Cada pared enlaza con su arte.",map_title:"Edificio {b}",bld_n:"Edificio {b}",map_fail:"No se pudieron cargar las paredes. Inténtelo de nuevo o pregunte en la tienda de regalos.",
picks_title:"Mis favoritos",picks_empty:"Aún no ha guardado ninguna pieza. Toque el corazón de una pieza para guardarla aquí.",picks_n_one:"{n} pieza guardada",picks_n_other:"{n} piezas guardadas",picks_share:"Compartir mi lista",picks_clear:"Borrar todo",picks_clear2:"Toque de nuevo para borrar",picks_remove:"Quitar",picks_note:"Se guarda solo en este teléfono. Muestre esta lista en la tienda de regalos.",picks_shared:"Alguien compartió esta lista con usted.",picks_saveall:"Guardar todo en Mis favoritos",picks_saved_all:"Guardado",picks_share_title:"Mis favoritos en Atomic Motors Art",lang_aria:"Idioma"};
S.fr={nav_all:"Toutes les œuvres",nav_map:"Plan",nav_picks:"Mes favoris",shop:"Visiter la boutique de cadeaux",
demo:"Page de démonstration. Les prix et détails sont des exemples inventés pour montrer la mise en page.",sku:"SKU",f_building:"Bâtiment",f_location:"Emplacement",f_size:"Taille",f_medium:"Technique",
buy:"Acheter en ligne",ask_buy:"Demandez à la boutique de cadeaux\npour acheter cette œuvre",st_available:"Disponible",st_sold:"Vendu",st_hold:"Réservé",st_notforsale:"Pas à vendre",
note_sold:"Cette œuvre a été vendue.",note_hold:"Réservée.\nDemandez à la boutique de cadeaux.",note_nfs:"Cette œuvre\nn'est pas à vendre.",
see_wall:"Voir tout sur {wall}",find_map:"La trouver sur le plan du bâtiment",on_wall:"Sur ce mur ({n})",
no_photo:"Photo bientôt disponible",photo_n:"Photo {i} sur {n}",photos_label:"Photos de cette œuvre. Faites glisser vers la gauche ou la droite.",prev_photo:"Photo précédente",next_photo:"Photo suivante",
share:"Partager",copied:"Lien copié",copy_manual:"Copiez ce lien",
pick_save:"Ajouter à Mes favoris",pick_saved:"Ajouté à Mes favoris",pick_add:"Ajouter {sku} à Mes favoris",pick_rem:"Retirer {sku} de Mes favoris",
foot_piece:"Donnez le SKU ci-dessus à la boutique de cadeaux pour qu'elle retrouve cette œuvre.",
no_piece:"Aucune œuvre trouvée pour le SKU {sku}. Demandez à la boutique de cadeaux.",load_fail:"Chargement impossible. Réessayez ou demandez à la boutique de cadeaux.",other_pieces:"Autres œuvres",
home_title:"Toutes les œuvres",pieces_one:"{n} œuvre",pieces_other:"{n} œuvres",of_total:"{n} sur {m}",search_ph:"Rechercher par SKU, titre ou lieu",search_aria:"Rechercher une œuvre",chip_all:"Tout",hide_sold:"Masquer les œuvres vendues",nothing:"Aucun résultat. Essayez une autre recherche ou un autre mur.",find_art_map:"Trouver des œuvres sur le plan du bâtiment",filter_aria:"Filtrer par mur",
wall_title:"Mur d'art",wall_pieces_one:"{n} œuvre sur ce mur",wall_pieces_other:"{n} œuvres sur ce mur",wall_none:"Pas encore d'œuvre sur ce mur.",wall_nowall:"Aucun mur trouvé pour ce code. Demandez à la boutique de cadeaux.",wall_noscan:"Scannez le code QR d'un panneau mural pour voir les œuvres de ce mur.",wall_cap:"Ce mur est entouré sur le plan. Touchez le plan pour l'ouvrir en grand.",wall_find_map:"Trouver ce mur sur le plan du bâtiment",wall_foot:"Touchez une œuvre pour voir ses photos, sa taille et son prix. Page de démonstration avec des détails inventés.",map_frame:"Plan du bâtiment avec ce mur mis en évidence",
map_hint_t:"Touchez un mur pour voir ses œuvres. Pincez ou utilisez + et − pour zoomer, et faites glisser pour vous déplacer.",map_hint_m:"Cliquez sur un mur pour voir ses œuvres. Faites défiler ou utilisez + et − pour zoomer, et faites glisser pour vous déplacer.",zoom_t:"Pincez ou utilisez les boutons pour zoomer",zoom_m:"Faites défiler ou utilisez les boutons pour zoomer",zin:"Zoom avant",zout:"Zoom arrière",fit:"Ajuster",other_b:"Autres bâtiments",soon:"Bientôt disponible",leg_art:"Mur avec œuvres",leg_none:"Pas encore d'œuvres",leg_door:"Porte",
map_foot:"Plan de démonstration avec une disposition et des détails inventés. Le vrai plan serait dessiné d'après le bâtiment.",main_ent:"Entrée principale",rollup:"Porte basculante",back_door:"Porte arrière",rest_door:"Porte des toilettes",stairs:"Escalier",open_floor:"Espace ouvert",map_aria:"Plan du bâtiment B. Chaque mur renvoie à ses œuvres.",map_title:"Bâtiment {b}",bld_n:"Bâtiment {b}",map_fail:"Impossible de charger les murs. Réessayez ou demandez à la boutique de cadeaux.",
picks_title:"Mes favoris",picks_empty:"Vous n'avez encore enregistré aucune œuvre. Touchez le cœur d'une œuvre pour l'enregistrer ici.",picks_n_one:"{n} œuvre enregistrée",picks_n_other:"{n} œuvres enregistrées",picks_share:"Partager ma liste",picks_clear:"Tout effacer",picks_clear2:"Touchez à nouveau pour effacer",picks_remove:"Retirer",picks_note:"Enregistré uniquement sur ce téléphone. Montrez cette liste à la boutique de cadeaux.",picks_shared:"Quelqu'un a partagé cette liste avec vous.",picks_saveall:"Tout ajouter à Mes favoris",picks_saved_all:"Enregistré",picks_share_title:"Mes favoris chez Atomic Motors Art",lang_aria:"Langue"};
S.de={nav_all:"Alle Kunst",nav_map:"Karte",nav_picks:"Meine Auswahl",shop:"Zum Geschenkeladen",
demo:"Demoseite. Preise und Angaben sind erfundene Beispiele, um das Layout zu zeigen.",sku:"SKU",f_building:"Gebäude",f_location:"Standort",f_size:"Größe",f_medium:"Technik",
buy:"Online kaufen",ask_buy:"Fragen Sie im Geschenkeladen,\num dieses Stück zu kaufen",st_available:"Verfügbar",st_sold:"Verkauft",st_hold:"Reserviert",st_notforsale:"Nicht verkäuflich",
note_sold:"Dieses Stück wurde verkauft.",note_hold:"Reserviert.\nFragen Sie im Geschenkeladen.",note_nfs:"Dieses Stück\nist nicht verkäuflich.",
see_wall:"Alles an {wall} ansehen",find_map:"Auf der Gebäudekarte finden",on_wall:"An dieser Wand ({n})",
no_photo:"Foto folgt",photo_n:"Foto {i} von {n}",photos_label:"Fotos dieses Stücks. Nach links oder rechts wischen.",prev_photo:"Vorheriges Foto",next_photo:"Nächstes Foto",
share:"Teilen",copied:"Link kopiert",copy_manual:"Diesen Link kopieren",
pick_save:"In Meine Auswahl speichern",pick_saved:"In Meiner Auswahl gespeichert",pick_add:"{sku} in Meine Auswahl speichern",pick_rem:"{sku} aus Meiner Auswahl entfernen",
foot_piece:"Nennen Sie dem Geschenkeladen die SKU oben, dann finden sie dieses Stück.",
no_piece:"Kein Stück mit der SKU {sku} gefunden. Fragen Sie im Geschenkeladen.",load_fail:"Konnte nicht geladen werden. Versuchen Sie es erneut oder fragen Sie im Geschenkeladen.",other_pieces:"Weitere Stücke",
home_title:"Alle Kunst",pieces_one:"{n} Stück",pieces_other:"{n} Stücke",of_total:"{n} von {m}",search_ph:"Nach SKU, Titel oder Ort suchen",search_aria:"Kunst durchsuchen",chip_all:"Alle",hide_sold:"Verkaufte Stücke ausblenden",nothing:"Keine Treffer. Versuchen Sie eine andere Suche oder Wand.",find_art_map:"Kunst auf der Gebäudekarte finden",filter_aria:"Nach Wand filtern",
wall_title:"Kunstwand",wall_pieces_one:"{n} Stück an dieser Wand",wall_pieces_other:"{n} Stücke an dieser Wand",wall_none:"An dieser Wand hängt noch keine Kunst.",wall_nowall:"Für diesen Code wurde keine Wand gefunden. Fragen Sie im Geschenkeladen.",wall_noscan:"Scannen Sie den QR-Code auf einem Wandschild, um die Kunst an dieser Wand zu sehen.",wall_cap:"Diese Wand ist auf der Karte markiert. Tippen Sie auf die Karte, um sie in voller Größe zu öffnen.",wall_find_map:"Diese Wand auf der Gebäudekarte finden",wall_foot:"Tippen Sie auf ein Stück, um Fotos, Größe und Preis zu sehen. Demoseite mit erfundenen Angaben.",map_frame:"Gebäudekarte mit hervorgehobener Wand",
map_hint_t:"Tippen Sie auf eine Wand, um ihre Kunst zu sehen. Zum Zoomen zwei Finger zusammen- oder auseinanderziehen oder + und − nutzen, zum Verschieben ziehen.",map_hint_m:"Klicken Sie auf eine Wand, um ihre Kunst zu sehen. Zum Zoomen scrollen oder + und − nutzen, zum Verschieben ziehen.",zoom_t:"Zum Zoomen zwei Finger spreizen oder die Tasten nutzen",zoom_m:"Zum Zoomen scrollen oder die Tasten nutzen",zin:"Vergrößern",zout:"Verkleinern",fit:"Anpassen",other_b:"Weitere Gebäude",soon:"Demnächst",leg_art:"Wand mit Kunst",leg_none:"Noch keine Kunst",leg_door:"Tür",
map_foot:"Demo-Grundriss mit erfundener Aufteilung und erfundenen Angaben. Die echte Karte würde nach dem tatsächlichen Gebäude gezeichnet.",main_ent:"Haupteingang",rollup:"Rolltor",back_door:"Hintertür",rest_door:"Toilettentür",stairs:"Treppe",open_floor:"Freie Fläche",map_aria:"Grundriss von Gebäude B. Jede Wand führt zu ihrer Kunst.",map_title:"Gebäude {b}",bld_n:"Gebäude {b}",map_fail:"Die Wände konnten nicht geladen werden. Versuchen Sie es erneut oder fragen Sie im Geschenkeladen.",
picks_title:"Meine Auswahl",picks_empty:"Sie haben noch keine Stücke gespeichert. Tippen Sie bei einem Stück auf das Herz, um es hier zu speichern.",picks_n_one:"{n} gespeichertes Stück",picks_n_other:"{n} gespeicherte Stücke",picks_share:"Meine Liste teilen",picks_clear:"Alle löschen",picks_clear2:"Zum Löschen erneut tippen",picks_remove:"Entfernen",picks_note:"Nur auf diesem Telefon gespeichert. Zeigen Sie diese Liste im Geschenkeladen.",picks_shared:"Jemand hat diese Liste mit Ihnen geteilt.",picks_saveall:"Alle in Meine Auswahl speichern",picks_saved_all:"Gespeichert",picks_share_title:"Meine Auswahl bei Atomic Motors Art",lang_aria:"Sprache"};
S.zh={nav_all:"全部艺术品",nav_map:"地图",nav_picks:"我的收藏",shop:"访问礼品店",
demo:"演示页面。价格和详情均为虚构示例，仅用于展示版式。",sku:"SKU",f_building:"楼",f_location:"位置",f_size:"尺寸",f_medium:"材质",
buy:"在线购买",ask_buy:"如需购买此作品\n请到礼品店询问",st_available:"可购买",st_sold:"已售出",st_hold:"已预留",st_notforsale:"非卖品",
note_sold:"此作品已售出。",note_hold:"已预留。\n请到礼品店询问。",note_nfs:"此作品\n不出售。",
see_wall:"查看{wall}的全部作品",find_map:"在楼层地图上查找",on_wall:"这面墙上（{n}）",
no_photo:"照片即将上传",photo_n:"第 {i} 张，共 {n} 张",photos_label:"此作品的照片。向左或向右滑动。",prev_photo:"上一张",next_photo:"下一张",
share:"分享",copied:"链接已复制",copy_manual:"请复制此链接",
pick_save:"加入我的收藏",pick_saved:"已加入我的收藏",pick_add:"将 {sku} 加入我的收藏",pick_rem:"将 {sku} 从我的收藏中移除",
foot_piece:"把上面的 SKU 告诉礼品店，他们就能找到这件作品。",
no_piece:"找不到 SKU 为 {sku} 的作品。请到礼品店询问。",load_fail:"无法加载。请重试，或到礼品店询问。",other_pieces:"其他作品",
home_title:"全部艺术品",pieces_one:"{n} 件作品",pieces_other:"{n} 件作品",of_total:"{m} 件中的 {n} 件",search_ph:"按 SKU、标题或位置搜索",search_aria:"搜索艺术品",chip_all:"全部",hide_sold:"隐藏已售出作品",nothing:"没有匹配项。请换个搜索词或墙面。",find_art_map:"在楼层地图上查找艺术品",filter_aria:"按墙面筛选",
wall_title:"艺术墙",wall_pieces_one:"这面墙上有 {n} 件作品",wall_pieces_other:"这面墙上有 {n} 件作品",wall_none:"这面墙上暂时没有作品。",wall_nowall:"找不到此代码对应的墙面。请到礼品店询问。",wall_noscan:"扫描墙面标牌上的二维码，查看这面墙上的作品。",wall_cap:"此墙面已在地图上标出。点按地图可全屏查看。",wall_find_map:"在楼层地图上查找这面墙",wall_foot:"点按作品可查看照片、尺寸和价格。演示页面，详情为虚构。",map_frame:"标出此墙面的楼层地图",
map_hint_t:"点按墙面查看其作品。双指捏合或使用 + 和 − 缩放，拖动可移动地图。",map_hint_m:"点击墙面查看其作品。滚动鼠标或使用 + 和 − 缩放，拖动可移动地图。",zoom_t:"双指捏合或使用按钮缩放",zoom_m:"滚动鼠标或使用按钮缩放",zin:"放大",zout:"缩小",fit:"适应",other_b:"其他楼",soon:"即将开放",leg_art:"有作品的墙",leg_none:"暂无作品",leg_door:"门",
map_foot:"演示平面图，布局和详情均为虚构。真实地图将根据实际建筑绘制。",main_ent:"正门",rollup:"卷帘门",back_door:"后门",rest_door:"洗手间门",stairs:"楼梯",open_floor:"开阔区域",map_aria:"B 楼平面图。每面墙都链接到它的作品。",map_title:"{b} 楼",bld_n:"{b} 楼",map_fail:"无法加载墙面。请重试，或到礼品店询问。",
picks_title:"我的收藏",picks_empty:"您还没有收藏任何作品。点按作品上的爱心即可收藏到这里。",picks_n_one:"已收藏 {n} 件作品",picks_n_other:"已收藏 {n} 件作品",picks_share:"分享我的清单",picks_clear:"全部清除",picks_clear2:"再次点按以清除",picks_remove:"移除",picks_note:"仅保存在此手机上。请在礼品店出示此清单。",picks_shared:"有人与您分享了这份清单。",picks_saveall:"全部加入我的收藏",picks_saved_all:"已保存",picks_share_title:"我在 Atomic Motors Art 的收藏",lang_aria:"语言"};

Object.assign(S.en,{"w_title": "Welcome to Atomic Motors", "w_lead": "We have four buildings, and you are welcome in all of them. Come in, look around and take your time.", "w_about": "About", "w_cars": "classic cars for sale", "w_art": "pieces of art for sale", "w_bld": "buildings", "w_hang": "Look up too. Old RC airplanes and other items hang from the ceiling, and they are for sale as well.", "w_noprice": "Most pieces do not have price tags yet. Scan the QR code on a wall sign, or ask at the gift shop.", "w_map_h": "Where to go", "w_map_hint": "Tap a building to see what is inside.", "w_here": "You are here", "w_enter": "Entrance", "w_art_map": "Art map ready", "w_mech": "Mechanics work in Building B, so watch for moving vehicles.", "w_guide": "Tour guides are sometimes around. When you do not see one, this page and the map are your guide.", "w_btn_art": "Browse all the art", "w_btn_map": "Art map of Building B", "w_bld_aria": "Map of the four buildings", "w_demo": "Demo page. Building positions follow a satellite view. Entrances, the gift shop and the numbers are still placeholders."});
Object.assign(S.es,{"w_title": "Bienvenido a Atomic Motors", "w_lead": "Tenemos cuatro edificios y usted es bienvenido en todos. Pase, mire con calma y tómese su tiempo.", "w_about": "Unos", "w_cars": "autos clásicos en venta", "w_art": "obras de arte en venta", "w_bld": "edificios", "w_hang": "Mire también hacia arriba. Aviones de radiocontrol antiguos y otros objetos cuelgan del techo, y también están a la venta.", "w_noprice": "La mayoría de las piezas aún no tienen etiqueta de precio. Escanee el código QR de un letrero de pared o pregunte en la tienda de regalos.", "w_map_h": "Adónde ir", "w_map_hint": "Toque un edificio para ver qué hay dentro.", "w_here": "Usted está aquí", "w_enter": "Entrada", "w_art_map": "Mapa de arte listo", "w_mech": "En el Edificio B trabajan mecánicos, así que tenga cuidado con los vehículos en movimiento.", "w_guide": "A veces hay guías turísticos. Si no ve uno, esta página y el mapa son su guía.", "w_btn_art": "Ver todo el arte", "w_btn_map": "Mapa de arte del Edificio B", "w_bld_aria": "Mapa de los cuatro edificios", "w_demo": "Página de demostración. La posición de los edificios sigue una vista satelital. Las entradas, la tienda de regalos y las cifras aún son provisionales."});
Object.assign(S.fr,{"w_title": "Bienvenue chez Atomic Motors", "w_lead": "Nous avons quatre bâtiments et vous êtes les bienvenus dans chacun d'eux. Entrez, regardez et prenez votre temps.", "w_about": "Environ", "w_cars": "voitures de collection à vendre", "w_art": "œuvres d'art à vendre", "w_bld": "bâtiments", "w_hang": "Levez aussi les yeux. De vieux avions radiocommandés et d'autres objets sont suspendus au plafond, et ils sont aussi à vendre.", "w_noprice": "La plupart des œuvres n'ont pas encore d'étiquette de prix. Scannez le code QR d'un panneau mural ou demandez à la boutique de cadeaux.", "w_map_h": "Où aller", "w_map_hint": "Touchez un bâtiment pour voir ce qu'il contient.", "w_here": "Vous êtes ici", "w_enter": "Entrée", "w_art_map": "Plan des œuvres prêt", "w_mech": "Des mécaniciens travaillent dans le bâtiment B : attention aux véhicules en mouvement.", "w_guide": "Des guides sont parfois présents. Si vous n'en voyez pas, cette page et le plan sont votre guide.", "w_btn_art": "Voir toutes les œuvres", "w_btn_map": "Plan des œuvres du bâtiment B", "w_bld_aria": "Plan des quatre bâtiments", "w_demo": "Page de démonstration. La position des bâtiments suit une vue satellite. Les entrées, la boutique de cadeaux et les chiffres sont encore provisoires."});
Object.assign(S.de,{"w_title": "Willkommen bei Atomic Motors", "w_lead": "Wir haben vier Gebäude, und Sie sind in allen willkommen. Kommen Sie herein, sehen Sie sich um und nehmen Sie sich Zeit.", "w_about": "Rund", "w_cars": "Oldtimer zu verkaufen", "w_art": "Kunstwerke zu verkaufen", "w_bld": "Gebäude", "w_hang": "Schauen Sie auch nach oben. Alte RC-Flugzeuge und andere Dinge hängen von der Decke und sind ebenfalls zu verkaufen.", "w_noprice": "Die meisten Stücke haben noch kein Preisschild. Scannen Sie den QR-Code auf einem Wandschild oder fragen Sie im Geschenkeladen.", "w_map_h": "Wohin?", "w_map_hint": "Tippen Sie auf ein Gebäude, um zu sehen, was darin ist.", "w_here": "Sie sind hier", "w_enter": "Eingang", "w_art_map": "Kunstkarte bereit", "w_mech": "In Gebäude B arbeiten Mechaniker, achten Sie also auf fahrende Fahrzeuge.", "w_guide": "Manchmal sind Führer unterwegs. Wenn Sie keinen sehen, sind diese Seite und die Karte Ihr Führer.", "w_btn_art": "Alle Kunst ansehen", "w_btn_map": "Kunstkarte von Gebäude B", "w_bld_aria": "Karte der vier Gebäude", "w_demo": "Demoseite. Die Lage der Gebäude folgt einer Satellitenansicht. Eingänge, Geschenkeladen und Zahlen sind noch Platzhalter."});
Object.assign(S.zh,{"w_title": "欢迎来到 Atomic Motors", "w_lead": "我们有四栋楼，欢迎您参观每一栋。请随意进来，慢慢看。", "w_about": "约", "w_cars": "辆经典老爷车待售", "w_art": "件艺术品待售", "w_bld": "栋楼", "w_hang": "也请抬头看看。旧的遥控飞机和其他物品挂在天花板上，同样可以购买。", "w_noprice": "大多数作品还没有价签。请扫描墙面标牌上的二维码，或到礼品店询问。", "w_map_h": "去哪里", "w_map_hint": "点按一栋楼查看里面有什么。", "w_here": "您在这里", "w_enter": "入口", "w_art_map": "艺术地图已就绪", "w_mech": "B 楼有技师在工作，请留意行驶的车辆。", "w_guide": "有时会有导览员。看不到时，请用本页和地图自行参观。", "w_btn_art": "浏览全部艺术品", "w_btn_map": "B 楼艺术地图", "w_bld_aria": "四栋楼地图", "w_demo": "演示页面。建筑位置参照卫星图。入口、礼品店和数字仍为占位内容。"});

Object.assign(S.en,{"w_gift": "Gift shop", "w_garage": "Garages", "w_show": "Showroom", "w_plane": "Airplane build", "w_mech": "Mechanics work in the garages at the north end of Building B. The showroom is at the south end.", "w_gift_note": "The gift shop is in the bottom right corner of Building C. It is worth finding.", "w_plane_note": "Look up at the north end of Building D, where an airplane is being built.", "w_gift_here": "Gift shop is here"});
Object.assign(S.es,{"w_gift": "Tienda de regalos", "w_garage": "Talleres", "w_show": "Exposición", "w_plane": "Avión en obra", "w_mech": "Los mecánicos trabajan en los talleres del extremo norte del Edificio B. La sala de exhibición está en el extremo sur.", "w_gift_note": "La tienda de regalos está en la esquina inferior derecha del Edificio C. Vale la pena encontrarla.", "w_plane_note": "Mire el extremo norte del Edificio D, donde se está construyendo un avión.", "w_gift_here": "Aquí está la tienda de regalos"});
Object.assign(S.fr,{"w_gift": "Boutique de cadeaux", "w_garage": "Garages", "w_show": "Exposition", "w_plane": "Avion en chantier", "w_mech": "Les mécaniciens travaillent dans les garages à l'extrémité nord du bâtiment B. La salle d'exposition est à l'extrémité sud.", "w_gift_note": "La boutique de cadeaux est dans le coin inférieur droit du bâtiment C. Elle vaut le détour.", "w_plane_note": "Regardez l'extrémité nord du bâtiment D, où un avion est en construction.", "w_gift_here": "La boutique de cadeaux est ici"});
Object.assign(S.de,{"w_gift": "Geschenkeladen", "w_garage": "Werkstatt", "w_show": "Ausstellung", "w_plane": "Flugzeugbau", "w_mech": "Die Mechaniker arbeiten in den Werkstätten am Nordende von Gebäude B. Der Ausstellungsraum liegt am Südende.", "w_gift_note": "Der Geschenkeladen liegt in der unteren rechten Ecke von Gebäude C. Es lohnt sich, ihn zu finden.", "w_plane_note": "Schauen Sie ans Nordende von Gebäude D, wo ein Flugzeug gebaut wird.", "w_gift_here": "Hier ist der Geschenkeladen"});
Object.assign(S.zh,{"w_gift": "礼品店", "w_garage": "车间", "w_show": "展厅", "w_plane": "飞机制造", "w_mech": "技师在 B 楼北端的车间工作。展厅在南端。", "w_gift_note": "礼品店在 C 楼的右下角，值得一找。", "w_plane_note": "请看 D 楼北端，那里正在制造一架飞机。", "w_gift_here": "礼品店在这里"});

Object.assign(S.en,{"w_service": "Service", "w_tbc": "To be confirmed", "w_service_note": "Need your car fixed? The service department is in the north part of Building B, in the garage area."});
Object.assign(S.es,{"w_service": "Servicio", "w_tbc": "Por confirmar", "w_service_note": "¿Necesita reparar su auto? El departamento de servicio está en la parte norte del Edificio B, en la zona de talleres."});
Object.assign(S.fr,{"w_service": "Service", "w_tbc": "À confirmer", "w_service_note": "Besoin de faire réparer votre voiture ? Le service après-vente se trouve dans la partie nord du bâtiment B, dans la zone des garages."});
Object.assign(S.de,{"w_service": "Service", "w_tbc": "Noch offen", "w_service_note": "Ihr Auto muss repariert werden? Die Serviceabteilung befindet sich im nördlichen Teil von Gebäude B, im Werkstattbereich."});
Object.assign(S.zh,{"w_service": "维修部", "w_tbc": "待确认", "w_service_note": "需要修车？维修部在 B 楼北部的车间区域。"});

Object.assign(S.en,{"w_entrance": "Entrance", "w_gift_path": "How to reach the gift shop: go in the door on the left side of Building C, walk to the back, turn right, then walk all the way to the front. The gift shop has no outside door.", "w_gift_note": "The gift shop is in the bottom right corner of Building C. It is worth finding."});
Object.assign(S.es,{"w_entrance": "Entrada", "w_gift_path": "Cómo llegar a la tienda de regalos: entre por la puerta del lado izquierdo del Edificio C, camine hasta el fondo, gire a la derecha y camine hasta el frente. La tienda de regalos no tiene puerta exterior."});
Object.assign(S.fr,{"w_entrance": "Entrée", "w_gift_path": "Pour atteindre la boutique de cadeaux : entrez par la porte du côté gauche du bâtiment C, allez jusqu'au fond, tournez à droite, puis marchez jusqu'à l'avant. La boutique n'a pas de porte extérieure."});
Object.assign(S.de,{"w_entrance": "Eingang", "w_gift_path": "So kommen Sie zum Geschenkeladen: Gehen Sie durch die Tür auf der linken Seite von Gebäude C, bis nach hinten, biegen Sie rechts ab und gehen Sie dann bis ganz nach vorn. Der Geschenkeladen hat keine Außentür."});
Object.assign(S.zh,{"w_entrance": "入口", "w_gift_path": "去礼品店的路线：从 C 楼左侧的门进入，走到最里面，向右转，再一直走到前面。礼品店没有对外的门。"});

Object.assign(S.en,{"w_back_note": "Building C also has a door in the middle of its back (north) side. It leads into the showroom."});
Object.assign(S.es,{"w_back_note": "El Edificio C también tiene una puerta en el centro de su parte trasera (norte). Da a la sala de exhibición."});
Object.assign(S.fr,{"w_back_note": "Le bâtiment C a aussi une porte au milieu de sa face arrière (nord). Elle mène à la salle d'exposition."});
Object.assign(S.de,{"w_back_note": "Gebäude C hat außerdem in der Mitte der Rückseite (Nordseite) eine Tür. Sie führt in den Ausstellungsraum."});
Object.assign(S.zh,{"w_back_note": "C 楼背面（北侧）中间还有一扇门，通向展厅。"});

function sget(k){try{return localStorage.getItem(k)}catch(e){return null}}
function sset(k,v){try{localStorage.setItem(k,v)}catch(e){}}
var qp=new URLSearchParams(location.search);
var LANG=(function(){var c=String(qp.get("lang")||sget("am_lang")||navigator.language||"en").slice(0,2).toLowerCase();return S[c]?c:"en"})();
function T(k,v){var s=S[LANG]&&S[LANG][k];if(s==null)s=S.en[k];if(s==null)return k;
  if(v)s=s.replace(/\{(\w+)\}/g,function(m,n){return v[n]!=null?v[n]:m});return s}
function TN(k,n,v){v=v||{};v.n=n;return T(k+(n===1?"_one":"_other"),v)}
function L(d,f){return (d&&(d[f+"_"+LANG]||d[f]))||""}
function wallName(w){return (w&&(w["name_"+LANG]||w.name))||""}
function wallShort(w){var n=wallName(w),m=n.replace(/^[^,，]*[,，]\s*/,"");return (w.building?w.building+" ":"")+m}
function statusKey(d){var s=String((d&&d.status)||"available").toLowerCase();return s==="sold"||s==="hold"||s==="notforsale"?s:"available"}
function statusLabel(k){return T("st_"+k)}

/* My picks: saved on this device only, no login */
var picks=[];try{var a=JSON.parse(sget("am_picks")||"[]");if(Array.isArray(a))picks=a.filter(function(x){return typeof x==="string"})}catch(e){}
var hearts=[];
function savePicks(){sset("am_picks",JSON.stringify(picks));refresh()}
function hasPick(s){return picks.indexOf(s)>-1}
function togglePick(s){var i=picks.indexOf(s);if(i>-1)picks.splice(i,1);else picks.push(s);savePicks();return i===-1}
function setPicks(list){picks=list.slice();savePicks()}
function refresh(){
  var c=document.getElementById("pickCount");if(c)c.textContent=picks.length?"("+picks.length+")":"";
  hearts.forEach(function(h){var on=hasPick(h.sku);h.el.setAttribute("aria-pressed",String(on));
    h.el.setAttribute("aria-label",T(on?"pick_rem":"pick_add",{sku:h.sku}));
    if(h.label)h.label.textContent=T(on?"pick_saved":"pick_save")});
}
var HEART='<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>';
function heart(sku,withText){
  var b=document.createElement("button");b.type="button";b.className="heart"+(withText?" wide":"");b.innerHTML=HEART;
  var lab=null;if(withText){lab=document.createElement("span");b.appendChild(lab)}
  b.addEventListener("click",function(e){e.preventDefault();e.stopPropagation();togglePick(sku)});
  hearts.push({sku:sku,el:b,label:lab});refresh();return b;
}

/* toast, copy, share */
function toast(msg){
  var t=document.createElement("div");t.className="toast";t.setAttribute("role","status");t.textContent=msg;document.body.appendChild(t);
  setTimeout(function(){t.classList.add("out")},1800);setTimeout(function(){if(t.parentNode)t.parentNode.removeChild(t)},2300);
}
function copyText(text){
  function fallback(){var ta=document.createElement("textarea");ta.value=text;ta.setAttribute("readonly","");ta.style.cssText="position:fixed;left:-9999px";document.body.appendChild(ta);ta.select();var ok=false;try{ok=document.execCommand("copy")}catch(e){}document.body.removeChild(ta);return ok}
  if(navigator.clipboard&&navigator.clipboard.writeText)return navigator.clipboard.writeText(text).then(function(){return true},function(){return fallback()});
  return Promise.resolve(fallback());
}
function share(data){
  if(navigator.share){return navigator.share(data).catch(function(e){if(e&&e.name==="AbortError")return})}
  var text=(data.text?data.text+"\n":"")+(data.url||"");
  return copyText(text).then(function(ok){toast(ok?T("copied"):T("copy_manual")+": "+(data.url||""))});
}
function baseUrl(){return location.origin+location.pathname.replace(/[^\/]*$/,"")}

/* static text + language picker */
function applyStatic(){
  document.documentElement.lang=LANG;
  [].forEach.call(document.querySelectorAll("[data-i18n]"),function(e){e.textContent=T(e.getAttribute("data-i18n"))});
  [].forEach.call(document.querySelectorAll("[data-i18n-ph]"),function(e){e.setAttribute("placeholder",T(e.getAttribute("data-i18n-ph")))});
  [].forEach.call(document.querySelectorAll("[data-i18n-aria]"),function(e){e.setAttribute("aria-label",T(e.getAttribute("data-i18n-aria")))});
  [].forEach.call(document.querySelectorAll("[data-i18n-title]"),function(e){e.setAttribute("title",T(e.getAttribute("data-i18n-title")))});
  var sel=document.getElementById("lang");
  if(sel){sel.setAttribute("aria-label",T("lang_aria"));sel.innerHTML="";
    LANGS.forEach(function(l){var o=document.createElement("option");o.value=l[0];o.textContent=l[1];if(l[0]===LANG)o.selected=true;sel.appendChild(o)});
    sel.addEventListener("change",function(){sset("am_lang",sel.value);var p=new URLSearchParams(location.search);p.delete("lang");var q=p.toString();location.href=location.pathname+(q?"?"+q:"")+location.hash});}
  refresh();
}
/* A grid tile for one piece: photo, SKU, title, price or status, plus a heart. wallLabel is optional. */
function tile(k,d,wallLabel){
  var st=statusKey(d),t=document.createElement("div");t.className="tile"+(st==="sold"?" is-sold":"");
  var a=document.createElement("a");a.className="item";a.href="index.html?s="+encodeURIComponent(k);
  var th=document.createElement("div");th.className="thumb";var ph=(d.photos||[])[0],title=L(d,"title");
  if(ph){var im=document.createElement("img");im.src=typeof ph==="string"?ph:ph.src;im.alt=title;im.loading="lazy";th.appendChild(im)}
  else{var sp=document.createElement("span");sp.textContent=T("no_photo");th.appendChild(sp)}
  var m=document.createElement("div");m.className="meta";
  var rows=[["sku",k],["t",title],["w",wallLabel||""],["p",st==="notforsale"?statusLabel(st):d.price]];
  rows.forEach(function(p){if(!p[1])return;var e=document.createElement("div");e.className=p[0]+(p[0]==="p"&&st==="notforsale"?" na":"");e.textContent=p[1];m.appendChild(e)});
  a.appendChild(th);a.appendChild(m);t.appendChild(a);
  if(st!=="available"&&st!=="notforsale"){var b=document.createElement("span");b.className="badge "+st;b.textContent=statusLabel(st);t.appendChild(b)}
  t.appendChild(heart(k,false));
  return t;
}
window.AM={tile:tile,T:T,TN:TN,L:L,LANG:LANG,wallName:wallName,wallShort:wallShort,statusKey:statusKey,statusLabel:statusLabel,
  picks:{get:function(){return picks.slice()},has:hasPick,toggle:togglePick,set:setPicks,heart:heart,refresh:refresh},
  toast:toast,copy:copyText,share:share,baseUrl:baseUrl,applyStatic:applyStatic};
applyStatic();
})();
