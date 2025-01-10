import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

export default function ProductPage() {
  const products = [
    {
      id: '1',
      name: 'Facial Cleanser',
      price: 'Rp 100,000',
      promoPrice: 'Rp 80,000',
      image: 'https://tse3.mm.bing.net/th?id=OIP.2GICSQ38WdcTA8UYsHtNywAAAA&w=474&h=474&c=7',
      promo: true,
    },
    {
      id: '2',
      name: 'Hydrating Serum',
      price: 'Rp 120,000',
      promoPrice: null, // No promo price
      image: 'https://tse3.mm.bing.net/th?id=OIP.CafDHzfEaljW_LW2Dtr6rQHaI0&w=474&h=474&c=7',
      promo: false,
    },
    {
      id: '3',
      name: 'Sunscreen SPF 50',
      price: 'Rp 180,000',
      promoPrice: 'Rp 150,000',
      image: 'https://tse1.mm.bing.net/th?id=OIP.jR5-jnUR9iXDQCOAHQrIVQHaHa&w=200&h=200&c=7',
      promo: true,
    },
    {
      id: '4',
      name: 'Moisturizing Cream',
      price: 'Rp 110,000',
      promoPrice: null,
      image: 'https://tse4.mm.bing.net/th?id=OIP.aLLyJ2t93rQoIHK4VQBOlQHaHa&w=200&h=200&c=7',
      promo: false,
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Product List</Text>
        <Text style={styles.headerSubtitle}>Browse all available skincare products</Text>
      </View>

      {/* Product Grid */}
      <FlatList
        data={products}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.productCard}>
            {/* Promo Badge */}
            {item.promo && (
              <View style={styles.promoBadge}>
                <Text style={styles.promoText}>Promo</Text>
              </View>
            )}
            <Image source={{ uri: item.image }} style={styles.productImage} />
            <Text style={styles.productName}>{item.name}</Text>
            {/* Price Section */}
            <View style={styles.priceContainer}>
              {item.promo ? (
                <>
                  <Text style={styles.originalPrice}>{item.price}</Text>
                  <Text style={styles.promoPrice}>{item.promoPrice}</Text>
                </>
              ) : (
                <Text style={styles.promoPrice}>{item.price}</Text>
              )}
            </View>
            <TouchableOpacity style={styles.buyButton}>
              <Text style={styles.buyButtonText}>Buy Now</Text>
            </TouchableOpacity>
          </View>
        )}
        contentContainerStyle={styles.productList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  header: {
    backgroundColor: '#1E88E5',
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#BBDEFB',
    marginTop: 8,
    textAlign: 'center',
  },
  productList: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  productCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    elevation: 3,
    marginBottom: 16,
    marginHorizontal: 8,
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  promoBadge: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: '#FF5722',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 8,
    zIndex: 1,
  },
  promoText: {
    fontSize: 12,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  productImage: {
    width: '100%',
    height: 120,
    borderRadius: 8,
    marginBottom: 10,
  },
  productName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 4,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  originalPrice: {
    fontSize: 12,
    color: '#888',
    textDecorationLine: 'line-through',
    marginRight: 8,
  },
  promoPrice: {
    fontSize: 14,
    color: '#1E88E5',
    fontWeight: 'bold',
  },
  buyButton: {
    backgroundColor: '#1E88E5',
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
    width: '100%',
  },
  buyButtonText: {
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
