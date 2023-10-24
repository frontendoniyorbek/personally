import { NextIntlClientProvider, useLocale, useMessages } from 'next-intl';

const Provider = ({ children }) => {
	const messages = useMessages();
	const locale = useLocale();

	return (
		<NextIntlClientProvider locale={locale} messages={messages}>
			{children}
		</NextIntlClientProvider>
	);
};

export default Provider;
