## فصل ششم: ایجاد همخوانی در اجرای تسک بین ابزارهای EEG, fMRI, ECG, Camera

### 6.1. چالش‌های ایجاد همخوانی

ایجاد همخوانی بین داده‌های مختلف از ابزارهای مختلف یکی از چالش‌های اصلی در این حوزه است. تفاوت در زمان‌بندی ثبت داده‌ها، تفاوت در فرکانس ثبت داده‌ها، و رزولوشن مکانی هر دستگاه از جمله چالش‌های اصلی هستند. هر یک از این ابزارها ویژگی‌های خاص خود را دارند که باید در تحلیل نهایی مد نظر قرار گیرند. برای مثال، EEG دارای رزولوشن زمانی بالا اما رزولوشن مکانی پایین است، در حالی که fMRI رزولوشن مکانی بالاتری دارد اما رزولوشن زمانی آن پایین‌تر است. ECG نیز با نرخ نمونه‌برداری متوسط و تحلیل سیگنال‌های قلبی ویژگی‌های خاص خود را دارد [[4]](#Enhancing-Emotion-Recognition-through-Federated-Learning:-A-Multimodal-Approach-with-Convolutional-Neural-Networks).

### 6.2. راهکارهای پیشنهادی

برای ایجاد همخوانی بین داده‌های مختلف، راهکارهای مختلفی وجود دارد که یکی از آن‌ها به شرح زیر است:

#### روش پیشنهادی: استفاده از تسک دو مرحله‌ای

برای هماهنگ‌سازی داده‌های fMRI با داده‌های EEG و ECG و رفع چالش‌های مربوط به نرخ نمونه‌برداری متفاوت و تداخل سیگنالی، می‌توان از یک روش دو مرحله‌ای استفاده کرد:

1. **مرحله اول: اجرای همزمان تسک بازی شناختی با EEG و ECG**
   - در این مرحله، کاربر به یک بازی شناختی می‌پردازد در حالی که سیگنال‌های EEG و ECG و همچنین داده‌های تصویربرداری از چهره ثبت می‌شوند. هدف از این مرحله ثبت داده‌های زمانی و فیزیولوژیکی همزمان در هنگام تحریکات احساسی است.
   - داده‌های ثبت شده از این مرحله شامل سیگنال‌های مغزی، سیگنال‌های قلبی و تغییرات حالات چهره در پاسخ به تحریکات احساسی بازی شناختی است [[5]](#Probing-fMRI-brain-connectivity-and-activity-changes-during-emotion-regulation-by-EEG-neurofeedback).

2. **مرحله دوم: استفاده از تصاویر بازی برای تحریک احساسی مجدد در fMRI**
   - در این مرحله، تصاویر محیط بازی که در مرحله اول ثبت شده‌اند و در آن‌ها کاربر تحریک احساسی شده است، به عنوان تسک برای fMRI استفاده می‌شوند. این تصاویر به همراه تصاویر خنثی برای عمل تفریق (subtraction) به کاربر نمایش داده می‌شوند تا حافظه احساسی و میزان قدرت احساسات در شبکه‌های نواحی مغزی مرتبط بررسی شوند.
   - در این مرحله، داده‌های fMRI ثبت می‌شوند که شامل تغییرات فعالیت مغزی در پاسخ به تحریکات احساسی مجدد هستند [[11]](#Phasic-emotional-reactions-to-video-game-events:-A-psychophysiological-investigation).

### 6.3. بررسی تحقیقات انجام شده

تحقیقات نشان داده‌اند که استفاده از رویکرد دو مرحله‌ای می‌تواند به هماهنگی بهتر بین داده‌های مختلف کمک کند. برای مثال، مطالعه‌ای نشان داد که استفاده از تصاویر احساسی ثبت شده از تسک‌های شناختی در fMRI می‌تواند به شناسایی دقیق‌تر شبکه‌های مغزی مرتبط با حافظه احساسی و پاسخ‌های احساسی کمک کند [[1]](#Fine-Grained-Emotion-Recognition-Using-Brain-Heart-Interplay-Measurements-and-eXplainable-Convolutional-Neural-Networks). همچنین، استفاده از داده‌های چندوجهی ثبت شده از EEG و ECG در کنار داده‌های fMRI می‌تواند به تحلیل جامع‌تری از پاسخ‌های احساسی و شناختی کاربران منجر شود [[7]](Heart-brain-connections:-phenotypic-and-genetic-insights-from-40,000-cardiac-and-brain-magnetic-resonance-images-Nature-Communications).

راهکارهای دیگر نیز شامل استفاده از تکنیک‌های همزمان‌سازی و مدل‌های ریاضی پیچیده برای هماهنگ‌سازی داده‌ها و تحلیل چندوجهی هستند. این تکنیک‌ها به ترکیب داده‌ها و استخراج ویژگی‌های مشترک از سیگنال‌های مختلف کمک می‌کنند [[3]](#A-Review-of-Emotion-Recognition-Using-Physiological-Signals).

### 6.4. نتایج مورد انتظار

با استفاده از روش پیشنهادی، انتظار می‌رود که نتایج زیر به دست آید:

- **بهبود دقت تشخیص احساسات:** هماهنگ‌سازی داده‌های مختلف و استفاده از تکنیک‌های تحلیل چندوجهی به شناسایی دقیق‌تر احساسات کاربران کمک می‌کند.
- **شناسایی شبکه‌های مغزی مرتبط با حافظه احساسی:** استفاده از تصاویر احساسی ثبت شده در fMRI به شناسایی دقیق‌تر شبکه‌های مغزی مرتبط با حافظه احساسی و پاسخ‌های احساسی کمک می‌کند.
- **تحلیل جامع‌تر پاسخ‌های احساسی و شناختی:** ترکیب داده‌های EEG، ECG و fMRI به تحلیل جامع‌تر و دقیق‌تر پاسخ‌های احساسی و شناختی کاربران منجر می‌شود.

---

## منابع

1. He, Z., Li, Z., Yang, F., Wang, L., Li, J., Zhou, C., & Pan, J. (2020). Advances in Multimodal Emotion Recognition Based on Brain–Computer Interfaces. Brain Sciences, 10(10), 687. doi:10.3390/brainsci10100687.
2. Zhao, S., Bhattacharyya, P., Merkey, S., Xu, L., Peltzer, B., Zhang, J., ... & Liu, C. (2021). Heart-brain connections: phenotypic and genetic insights from 40,000 cardiac and brain magnetic resonance images. Nature Communications, 12(1), 1-11. doi:10.1038/s41467-021-21726-w.
3. Shu, L., Yu, Y., Chen, W., Hua, H., Li, Q., Jin, J., ... & Xu, X. (2018). A Review of Emotion Recognition Using Physiological Signals. Sensors, 18(7), 2074. doi:10.3390/s18072074.
4. Kairouz, P., McMahan, H. B., Avent, B., Bellet, A., Bennis, M., Bhagoji, A. N., ... & Zhao, S. (2019). Enhancing Emotion Recognition through Federated Learning: A Multimodal Approach with Convolutional Neural Networks. arXiv preprint arXiv:1912.04977.
5. Liu, Y., Sourina, O., Nguyen, M. K., & Pavlov, N. (2018). Probing fMRI brain connectivity and activity changes during emotion regulation by EEG neurofeedback. IEEE Transactions on Neural Systems and Rehabilitation Engineering, 26(11), 2203-2213. doi:10.1109/TNSRE.2018.2869654.
6. Ravaja, N., Saari, T., Salminen, M., Laarni, J., & Kallinen, K. (2006). Phasic emotional reactions to video game events: A psychophysiological investigation. Media Psychology, 8(4), 343-367. doi:10.1207/s1532785xmep0804_2.