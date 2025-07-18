import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';
import { icons } from "@/constants/icons";

const MovieCard = ({ id, poster_path, title, vote_average, release_date }: Movie) => {
  console.log(poster_path);
  return (
    <Link href={`/movies/${id}`} asChild>
        <TouchableOpacity style={{flexBasis: '30%'}}>
            <Image
                source={{
                    uri: poster_path
                        ? `https://image.tmdb.org/t/p/w500${poster_path}`
                        : 'https://placehold.co/600x400/1a1a1a/ffffff.png'
                }}
                style={{ width: '100%', height: 200, borderRadius: 10 }}
                resizeMode="cover"
            />

            <Text className='text-sm font-bold text-white mt-2' numberOfLines={1}>{title}</Text>

            <View className='flex-row items-center justify-start gap-x-1'>
                <Image source={icons.star} className='size-4'/>
                <Text className='text-xs text-white font-bold uppercase'>{Math.round(vote_average / 2)}</Text>
            </View>

            <View className='flex-row items-center justify-between'>
                <Text className='text-xs text-light-300 font-medium mt-1'>
                    {release_date?.split('-')[0]}
                </Text>
                {/* <Text className='text-xs text-light-300 font-medium mt-1'>
                    Movie
                </Text> */}
            </View>
        </TouchableOpacity>      
    </Link>
  )
}

export default MovieCard