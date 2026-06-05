export const CONTACT_EMAIL = "margauxmalhomme@gmail.com";

export const DEFAULT_CONTACT_SUBJECT = "Demande d'information";

/** Gras (sans-serif Unicode) — lisible dans la plupart des clients mail. */
function bold(text: string): string {
  return [...text]
    .map((char) => {
      const code = char.charCodeAt(0);
      if (code >= 65 && code <= 90) {
        return String.fromCodePoint(0x1d5d4 + (code - 65));
      }
      if (code >= 97 && code <= 122) {
        return String.fromCodePoint(0x1d5ee + (code - 97));
      }
      return char;
    })
    .join("");
}

/** Italique (Unicode mathématique) pour les zones de réponse. */
function italic(text: string): string {
  return [...text]
    .map((char) => {
      const code = char.charCodeAt(0);
      if (code >= 65 && code <= 90) {
        return String.fromCodePoint(0x1d434 + (code - 65));
      }
      if (code >= 97 && code <= 122) {
        return String.fromCodePoint(0x1d456 + (code - 97));
      }
      return char;
    })
    .join("");
}

/** Soulignement (caractères combinants) pour les libellés. */
function underline(text: string): string {
  return [...text].map((char) => char + "\u0332").join("") + "\u0332";
}

function boldUnderline(text: string): string {
  return underline(bold(text));
}

/** Libellé souligné + zone de réponse en italique. */
function fieldLine(label: string): string {
  return `${underline(label)} : ${italic(" ")}`;
}

function sectionTitle(text: string): string {
  return boldUnderline(text);
}

const ANSWER = italic(" ");

/** Corps prérempli pour faciliter la prise de contact des familles. */
export const CONTACT_EMAIL_BODY = `Bonjour,


${sectionTitle("Je suis")}

${fieldLine("Nom")}
${fieldLine("Prénom")}
${fieldLine("Je suis le père, la mère, le responsable légal, autre")}


${sectionTitle("Je vous contacte concernant l'enfant")}

- ${fieldLine("Nom et prénom de l'enfant")}
- ${fieldLine("Âge")}
- ${fieldLine("Ville")}
- L'enfant est-il scolarisé ? (oui/non — ${underline("combien d'heures")} ?) : ${ANSWER}
- ${fieldLine("L'enfant est-il accompagné par des professionnels du médico-social ? (oui/non — lesquels)")}
- ${fieldLine("Ma demande aujourd'hui est")}

`;

export function contactMailtoHref(
  subject: string = DEFAULT_CONTACT_SUBJECT,
): string {
  const query = [
    `subject=${encodeURIComponent(subject)}`,
    `body=${encodeURIComponent(CONTACT_EMAIL_BODY)}`,
  ].join("&");
  return `mailto:${CONTACT_EMAIL}?${query}`;
}
