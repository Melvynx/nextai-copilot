// ❌ Il y a un problème, on ne veut afficher les secondes (etc...) que si c'est supérieur à 0.

// 🦁 Utilise Copilot et la commande `CMD + I`

export const getElapsedTime = (date: Date): string => {
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  return `${days}d ${hours % 24}h ${minutes % 60}m ${seconds % 60}s`;
};
