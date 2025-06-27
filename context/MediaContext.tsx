import React, { createContext, useContext, ReactNode, useState } from "react";

interface MediaItem {
	id: string;
	title: string;
	poster: string;
}
interface MediaContextProps {
	movies: MediaItem[];
	tvShows: MediaItem[];
	// later: watchlist, reviews
}

const MediaContext = createContext<MediaContextProps>({
	movies: [],
	tvShows: [],
});

export const MediaProvider = ({ children }: { children: ReactNode }) => {
	// placeholder data
	const [movies] = useState<MediaItem[]>([]);
	const [tvShows] = useState<MediaItem[]>([]);

	return (
		<MediaContext.Provider value={{ movies, tvShows }}>
			{children}
		</MediaContext.Provider>
	);
};

export const useMedia = () => useContext(MediaContext);