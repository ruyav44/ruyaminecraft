
# Rüya Upload

Bu proje, kullanıcıların dosya yükleyip paylaşabilecekleri bir web platformudur. Ayrıca, yüklenen dosyalar üzerine yapay zeka tabanlı analizler gerçekleştirilir. Kullanıcı güvenliği ve gizliliği en ön planda tutulmuştur.

## Özellikler

- **Dosya Yükleme**: Kullanıcılar, belirli dosya türlerini (resim, video, belge, vb.) sisteme yükleyebilir.
- **Gizlilik ve Güvenlik**: Yüklenen dosyalar, platformda şifreli bir şekilde saklanır. Herhangi bir üçüncü taraf ile paylaşılmaz.
- **Yapay Zeka (AI) Analizi**: Yüklenen dosyalar üzerinde, dosyanın içeriğine dair yapay zeka tabanlı analizler yapılır. Bu analizler sadece dosya sahibinin erişimine açıktır.
- **Kullanıcı Girişi**: Kullanıcılar, dosyalarını yönetmek için platforma şifreli giriş yapabilir.
- **Veri Şifreleme**: Tüm veri transferi SSL ile şifrelenmiştir. Kullanıcı bilgileri veya yüklenen dosyalar asla üçüncü taraflarla paylaşılmaz.

## Kurulum

### Gereksinimler

- Node.js
- MongoDB (veya başka bir veritabanı)
- Express.js (veya tercih edilen framework)

### Adımlar

1. **Depoyu Klonlayın**

   ```bash
   git clone https://github.com/kullaniciadi/upload-site.git
   cd upload-site
   ```

2. **Bağımlılıkları Yükleyin**

   ```bash
   npm install
   ```

3. **Çevre Değişkenlerini Ayarlayın**

   `.env` dosyasını oluşturun ve gerekli parametreleri girin:

   ```bash
   DB_URI=mongodb://localhost:27017/upload-site
   SECRET_KEY=super-secret-key
   ```

4. **Uygulamayı Başlatın**

   ```bash
   npm start
   ```

### API Kullanımı

- **POST /upload**
    - **Açıklama**: Dosya yüklemek için kullanılır.
    - **Parametreler**:
      - `file`: Yüklenecek dosya.
    - **Cevap**: Yükleme başarılıysa dosyanın id’si döner.

- **POST /login**
    - **Açıklama**: Kullanıcı girişini sağlar.
    - **Parametreler**:
      - `email`: Kullanıcı e-posta adresi.
      - `password`: Kullanıcı şifresi.
    - **Cevap**: Giriş başarılıysa token döner.

- **GET /files/:id**
    - **Açıklama**: Yüklenen bir dosyayı getirir.
    - **Parametreler**:
      - `id`: Dosya ID'si.
    - **Cevap**: Dosyanın içeriği.

## Güvenlik

1. **Şifreleme**: Kullanıcı şifreleri, uygulamaya kaydedilmeden önce bcrypt ile şifrelenir.
2. **SSL**: Tüm veri transferi, SSL sertifikası kullanılarak şifrelenir.
3. **Dosya Analizi**: Yapay zeka tarafından yapılan dosya analizleri, yalnızca dosya sahibinin erişimine açıktır ve hiçbir kişisel bilgi toplamaz.

## Gizlilik Politikası

- **Veri Toplama**: Sadece yüklenen dosyalar ve kullanıcı giriş bilgileri (e-posta, şifre) toplanır. Bu bilgiler yalnızca servis sağlamak için kullanılır.
- **Veri Paylaşımı**: Yüklediğiniz dosyalar veya kişisel bilgiler üçüncü şahıslarla paylaşılmaz.
- **Dosya Saklama**: Yüklenen dosyalar, platformda belirli bir süreyle saklanır. Süre sonunda, dosyalar otomatik olarak silinir.

## Katkıda Bulunma

Eğer projeye katkı sağlamak isterseniz, aşağıdaki adımları izleyebilirsiniz:

1. Bu repoyu çatallayın (`fork`).
2. Yeni bir özellik ekleyin veya bir hata düzeltmesi yapın.
3. Değişikliklerinizi bir pull request olarak gönderin.

## Lisans

Bu proje MIT Lisansı ile lisanslanmıştır. Daha fazla bilgi için [LICENSE](./LICENSE) dosyasına bakabilirsiniz.

---

Bu README, hem dosya yükleme özelliklerini hem de gizlilik ve güvenlik önlemlerini açıkça belirtiyor. Kullanıcılar için bilgilendirici ve güven verici bir açıklama sunuyor. Gereksinimlerinizi ve özelliklerinizi özelleştirerek bunu daha da geliştirebilirsiniz!
