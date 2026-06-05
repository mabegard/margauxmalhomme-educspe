export const CONTACT_EMAIL = "margauxmalhomme@gmail.com";

export const DEFAULT_CONTACT_SUBJECT = "Demande d'information";

/** Corps prérempli — texte simple, lisible dans tous les clients mail. */
export const CONTACT_EMAIL_BODY = `Bonjour,

Je suis :
Nom :
Prénom :
Je suis le père, la mère, le responsable légal, autre :

Je vous contacte concernant l'enfant :

Nom et prénom de l'enfant :
Âge :
Ville :
L'enfant est-il scolarisé ? (oui/non — combien d'heures ?) :
L'enfant est-il accompagné par des professionnels du médico-social ? (oui/non — lesquels) :
Ma demande aujourd'hui est :

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
