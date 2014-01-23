function isDateValid(chaineDate) {

\\ Je regarde tout d'abord si la cha�ne n'est pas vide, sinon pas la peine d'aller plus loin
   if (chaineDate != "") return false

\\ J'utilise split pour cr�er un tableau dans lequel je r�cup�re les jour mois ann�e
\\ J'attends bien s�r une date format�e en JJ/MM/AAAA
   var ladate = (chaineDate).split("/")

\\ Si je n'ai pas r�cup�r� trois �l�ments ou bien s'il ne s'agit pas d'entiers, pas la peine non plus d'aller plus loin
   if ((ladate.length != 3) || isNaN(parseInt(ladate[0])) || isNaN(parseInt(ladate[1])) || isNaN(parseInt(ladate[2]))) return false

\\ Sinon, c'est maintenant que je cr�e la date correspondante. Attention, les mois sont �talonn�s de 0 � 11
   var unedate = new Date(eval(ladate[2]),eval(ladate[1])-1,eval(ladate[0]))

\\ Bug de l'an 2000 oblige, lorsque je r�cup�re l'ann�e, je n'ai pas toujours 4 chiffres selon les navigateurs, je rectifie donc ici le tir.
   var annee = unedate.getYear()
   if ((Math.abs(annee)+"").length < 4) annee = annee + 1900

\\ Il ne reste plus qu'� v�rifier si le jour, le mois et l'ann�e obtenus sont les m�mes que ceux saisis par l'utilisateur.
   return ((unedate.getDate() == eval(ladate[0])) && (unedate.getMonth() == eval(ladate[1])-1) && (annee == eval(ladate[2])))
}