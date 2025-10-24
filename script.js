// --- PUOI MODIFICARE QUESTA RIGA ---
// Formato: Anno, Mese (da 0 a 11), Giorno, Ora, Minuto, Secondo
// NOTA: "Ottobre" è il mese 9 (perché Gennaio è 0)
// new Date(ANNO, MESE, GIORNO, ORA, MINUTI, SECONDI)
// Per il 27 Ottobre alle 18:00
const targetDate = new Date(2025, 9, 24, 22, 25, 0).getTime();
// ------------------------------------

// Se vuoi un'altra data, ad esempio il 31 Dicembre 2025 a mezzanotte:
// const targetDate = new Date(2025, 11, 31, 23, 59, 59).getTime();


// Seleziona gli elementi HTML che ci servono
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const countdownContainer = document.getElementById('countdown-container');
const messageContainer = document.getElementById('message-container');

// Aggiorna il countdown ogni secondo
const interval = setInterval(() => {
    // 1. Calcola la data e la distanza
    const now = new Date().getTime();
    const distance = targetDate - now;

    // 2. Se il tempo è scaduto
    if (distance < 0) {
        clearInterval(interval); // Ferma l'aggiornamento
        countdownContainer.style.display = 'none'; // Nasconde il countdown
        messageContainer.classList.remove('hidden'); // Mostra il messaggio finale
        return; // Esce dalla funzione
    }

    // 3. Calcola il tempo rimanente
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // 4. Mostra i risultati nell'HTML
    // La funzione padStart(2, '0') aggiunge uno '0' se il numero è < 10 (es. 9 -> 09)
    daysEl.innerText = String(days).padStart(2, '0');
    hoursEl.innerText = String(hours).padStart(2, '0');
    minutesEl.innerText = String(minutes).padStart(2, '0');
    secondsEl.innerText = String(seconds).padStart(2, '0');

}, 1000); // 1000 millisecondi = 1 secondo
